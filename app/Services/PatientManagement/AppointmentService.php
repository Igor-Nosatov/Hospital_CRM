<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\AppointmentDto;
use App\DataTransferObjects\PatientManagement\UpdateAppointmentDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\MedicalEvent;
use App\Models\PatientManagement\Appointment;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AppointmentService
{
    public function index($request): array
    {
        return [
            'appointment_count' => $this->appointmentCount(),
            'calendar_data' => $this->calendarData($request),
        ];
    }

    private function appointmentCount(): array
    {
        $doctor = Doctor::where('user_id', Auth::id())->firstOrFail();
        $appointments = $doctor->appointments();

        $totalConsultationsForMonth = $appointments->count();
        $inPersonConsultations = $appointments->where('type', 'Offline')->count();
        $videoConsultations = $appointments->where('type', 'Online')->count();
        $totalCompletedConsultations = $appointments->where('status', 'completed')->count();

        return [
            'total_consultations_for_month' => $totalConsultationsForMonth,
            'in_person_consultations' => $inPersonConsultations,
            'video_consultations' => $videoConsultations,
            'total_completed_consultations' => $totalCompletedConsultations,
        ];
    }

    private function calendarData($request): array
    {
        $doctor = Doctor::where('user_id', Auth::id())->with('doctorNotifications')->first();

        $currentYear = $request->input('selected_year', Carbon::now()->year);
        $currentMonth = $request->input('selected_month', Carbon::now()->month);

        $date = Carbon::createFromDate($currentYear, $currentMonth, 1);

        $numDays = $date->daysInMonth;

        $dates = [];

        for ($day = 1; $day <= $numDays; $day++) {

            $startOfDay = Carbon::createFromDate($currentYear, $currentMonth, $day)->startOfDay();
            $endOfDay = Carbon::createFromDate($currentYear, $currentMonth, $day)->endOfDay();

            $appointments = $doctor->appointments()
                ->whereBetween('appointment_datetime', [$startOfDay, $endOfDay])
                ->select([
                    'appointments.id',
                    'appointments.appointment_datetime',
                    'appointments.reason',
                    'appointments.status',
                    'appointments.type',
                ])
                ->get();

            $medicalEvents = MedicalEvent::query()
                ->whereDate('created_at', $startOfDay)
                ->select([
                    'medical_events.id',
                    'medical_events.name',
                    'medical_events.organizer',
                    'medical_events.medical_event_type',
                    'medical_events.language',
                ])
                ->get();

            $doctorNotifications = $doctor->doctorNotifications()
                ->whereDate('created_at', $startOfDay)
                ->select([
                    'doctor_notifications.id',
                    'doctor_notifications.title',
                    'doctor_notifications.message',
                    'doctor_notifications.created_at',
                ])
                ->get();

            $date = sprintf('%04d-%02d-%02d', $currentYear, $currentMonth, $day);
            $dates[$date] = [
                'appointment_list' => $appointments->toArray(),
                'notification_list' => $doctorNotifications->toArray(),
                'medical_event_list' => $medicalEvents->toArray(),
            ];
        }

        return $dates;
    }

    public function show(int $appointmentId): array
    {
        $doctor = Doctor::where('user_id', Auth::id())->firstOrFail();
        $doctorId = $doctor->id;

        $appointment = Appointment::query()
            ->where('id', $appointmentId)
            ->where('doctor_id', $doctorId)
            ->first();

        if (!$appointment) {
            throw new \Exception('Appointment not found.');
        }

        $appointment->appointment_datetime = Carbon::parse($appointment->appointment_datetime)->toDateTimeString();
        $appointment->reminder_datetime = Carbon::parse($appointment->reminder_datetime)->toDateTimeString();

        return [
            'id' => $appointment->id,
            'appointment_datetime' => $appointment->appointment_datetime,
            'reason' => Str::limit($appointment->reason, 20),
            'symptoms' => $appointment->symptoms,
            'notes' => $appointment->notes,
            'status' => $appointment->status,
            'type' => $appointment->type,
            'reminder_datetime' => $appointment->reminder_datetime,
            'patient_id' => $appointment->patient_id,
            'doctor_id' => $appointment->doctor_id,
            'medical_service_id' => $appointment->medical_service_id,
        ];
    }
    public function store(AppointmentDto $dto): Appointment
    {
        return Appointment::create($dto->toArray());
    }

    public function update(UpdateAppointmentDto $dto, Appointment $appointment): Appointment
    {
        $existingAppointment = Appointment::find($appointment->id);

        if (!$existingAppointment) {
            throw new \Exception('Appointment not found.');
        }

        $existingAppointment->update([
            'reason' => $dto->reason,
            'symptoms' => $dto->symptoms,
            'notes' => $dto->notes,
            'status' => $dto->status,
            'type' => $dto->type,
        ]);

        return $existingAppointment;
    }

    public function destroy(Appointment $appointment): void
    {
        $appointment->delete();
    }

    public function getAppointmentList($request): array
    {
        $searchParam = $request->input('search');
        $patientId = (int)$request->input('patientId');

        $appointments = Appointment::search($searchParam)
            ->where('patient_id', $patientId)
            ->select(['id', 'appointment_datetime', 'type', 'reason','patient_id'])
            ->paginate(3);

        $meta = [
            'total' => $appointments->total(),
            'per_page' => $appointments->perPage(),
            'current_page' => $appointments->currentPage(),
            'last_page' => $appointments->lastPage(),
            'next_page_url' => $appointments->nextPageUrl(),
            'prev_page_url' => $appointments->previousPageUrl(),
        ];

        return [
            'appointmentList' => $appointments->items(),
            'meta' => $meta,
        ];
    }
}
