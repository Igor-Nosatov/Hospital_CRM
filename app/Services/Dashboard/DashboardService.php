<?php

declare(strict_types=1);

namespace App\Services\Dashboard;

use App\Enums\AppointmentType;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorReview;
use App\Models\MedicalStaff\MedicalEvent;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\PatientVisit;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class DashboardService
{
    public function index(): array
    {
        $doctorId = $this->getDoctorId();

        return [
            'appointment_score' => $this->getTodayAppointmentsData($doctorId),
            'first_appointments_today' => $this->getFirstAppointmentsToday($doctorId),
            'doctor_personal_score' => $this->doctorPersonalScore($doctorId),
            'new_medical_events' => $this->newMedicalEvents(),
        ];
    }

    private function getDoctorId(): int
    {
        return Doctor::where('user_id', Auth::id())->value('id');
    }

    private function getTodayAppointmentsData(int $doctorId): array
    {
        $today = Carbon::today();

        $appointmentQuery = Appointment::where('doctor_id', $doctorId)
            ->whereDate('created_at', $today);

        $todayOnlineAppointments = $appointmentQuery->where('type', AppointmentType::ONLINE)->count();
        $todayOfflineAppointments = $appointmentQuery->where('type', AppointmentType::OFFLINE)->count();
        $todayAppointments = $todayOfflineAppointments + $todayOnlineAppointments;

        return [
            'total_appointments' => $todayAppointments,
            'total_online_appointments' => $todayOnlineAppointments,
            'total_offline_appointments' => $todayOfflineAppointments,
        ];
    }

    private function getFirstAppointmentsToday(int $doctorId): array
    {
        $appointments = Appointment::where('doctor_id', $doctorId)
            ->select(['id', 'patient_id', 'appointment_datetime', 'status', 'type'])
            ->orderByDesc('appointment_datetime')
            ->take(3)
            ->with('patient')
            ->get();

        return $appointments->map(function ($appointment) {
            $patient = $appointment->patient;

            if ($patient) {
                $patientFullName = "{$patient->first_name} {$patient->last_name}";
                $patientAge = now()->diffInYears($patient->date_of_birth);
                $visitsCount = $patient->patientVisits()->count();
            } else {
                $patientFullName = 'Unknown Patient';
                $patientAge = null;
                $visitsCount = 0;
            }

            return [
                'id' => $appointment->id,
                'patient_id' => $appointment->patient_id,
                'appointment_datetime' => $appointment->appointment_datetime,
                'status' => $appointment->status,
                'type' => $appointment->type,
                'patient_full_name' => $patientFullName,
                'patient_age' => $patientAge,
                'visits_count' => $visitsCount,
            ];
        })->toArray();
    }
    private function doctorPersonalScore(int $doctorId): array
    {
        $doctor = Doctor::where('id', $doctorId)
            ->withCount('patients')
            ->first();

        $totalPatients = $doctor->patients_count;

        $visitsLastSixMonths = PatientVisit::where('doctor_id', $doctorId)
            ->with('appointment')
            ->get()
            ->pluck('appointment.appointment_datetime');

        $visitsPerMonth = $visitsLastSixMonths->groupBy(function ($visit) {
            return $visit->format('Y-M');
        })->map(function ($groupedVisits) {
            return $groupedVisits->count();
        });

        $months = $visitsPerMonth->keys()->map(fn($month) => date('M', strtotime($month)))->toArray();
        $visits = $visitsPerMonth->values()->toArray();

        $doctorRank = DoctorReview::where('doctor_id', $doctorId)
            ->pluck('rank')
            ->avg();

        $currentYear = (int) date("Y");

        return [
            'total_patients' => $totalPatients,
            'month_list' => $months,
            'visit_list' => $visits,
            'doctor_rank' => $doctorRank,
            'current_year' => $currentYear,
        ];
    }

    private function newMedicalEvents(): array
    {
        return MedicalEvent::select([
            'id',
            'name',
            'organizer',
            'event_date',
            'language',
            'url_img',
        ])
            ->latest()
            ->take(3)
            ->get()
            ->toArray();
    }
}
