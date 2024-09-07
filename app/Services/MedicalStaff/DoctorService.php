<?php

declare(strict_types=1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\DoctorDto;
use App\DataTransferObjects\MedicalStaff\UpdateDoctorDto;
use App\Enums\AppointmentStatus;
use App\Enums\AppointmentType;
use App\Enums\PaymentStatus;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorNotification;
use App\Models\MedicalStaff\Payment;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PatientVisit;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class DoctorService
{
    public function index(): Collection
    {
        return Doctor::with(['speciality', 'department'])->get();
    }

    public function show($doctor): array
    {
        return [
            'personal_information' => $this->personalInformation($doctor),
            'time_spent_this_month' => $this->timeSpentThisMonth(),
            'patients_served_this_month' => $this->patientsServed(),
            'notifications_overview' => $this->notificationsOverview(),
            'patient_demographics' => $this->patientDemographics(),
            'patient_payments' => $this->patientPayments(),
        ];
    }

    private function personalInformation($doctor): array
    {
        $personalInformation = [];

        $personalInformation = [
            'id' => $doctor->id,
            'full_name' => $doctor->first_name . ' ' . $doctor->last_name,
            'address' => $doctor->address,
            'email' => $doctor->user->email,
            'phone_number' => $doctor->phone_number,
            'date_of_birth' => $doctor->date_of_birth,
            'religion' => $doctor->religion,
            'biography' => $doctor->biography,
            'education' => $doctor->education,
            'experience' => $doctor->experience,
            'languages' => $doctor->languages,
            'current_location' => $doctor->current_location,
            'certifications' => $doctor->certifications,
            'medical_license' => $doctor->medical_license,
            'professional_memberships' => $doctor->professional_memberships,
            'awards' => $doctor->awards,
            'publications' => $doctor->publications,
            'research_interests' => $doctor->research_interests,
        ];

        return $personalInformation;
    }

    public function visitsForMonth(): array
    {
        $doctorId = Doctor::select('id')->where('user_id', Auth::id())->first()->id;

        $visits = PatientVisit::where('doctor_id', $doctorId)
            ->with(['patient' => function ($query) {
                $query->select('id', 'first_name', 'last_name', 'date_of_birth');
            }])
            ->select(['id','complaints', 'symptoms', 'treatment', 'notes', 'patient_id', 'created_at'])
            ->paginate(7);

        $visitData = $visits->map(function ($visit) {
            return [
                'id' => $visit->id,
                'patient_id' => $visit->patient_id,
                'first_name' => optional($visit->patient)->first_name,
                'last_name' => optional($visit->patient)->last_name,
                'date_of_birth' => optional($visit->patient)->date_of_birth ? optional($visit->patient)->date_of_birth->format('d-m-Y') : null,
                'complaints' => Str::limit($visit->complaints, 35),
                'symptoms' => Str::limit($visit->symptoms, 35),
                'treatment' => Str::limit($visit->treatment, 35),
                'notes' => Str::limit($visit->notes, 35),
                'visit_date' => $visit->created_at->format('d-m-Y'),
            ];
        });

        return [
            'visit_data' => $visitData,
            'visit_meta' => [
                'current_page' => $visits->currentPage(),
                'last_page' => $visits->lastPage(),
                'per_page' => $visits->perPage(),
                'total' => $visits->total()
            ],
        ];
    }

    private function timeSpentThisMonth(): array
    {
        $doctorId = Doctor::select('id')->where('user_id', Auth::id())->first()->id;

        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        $countOfflineAppointments = Appointment::where('doctor_id', $doctorId)
            ->where('status', AppointmentStatus::COMPLETED)
            ->where('type', AppointmentType::OFFLINE)
            ->whereBetween('appointment_datetime', [$currentMonthStart, $currentMonthEnd])
            ->count();

        $countOnlineAppointments = Appointment::where('doctor_id', $doctorId)
            ->where('status', AppointmentStatus::COMPLETED)
            ->where('type', AppointmentType::ONLINE)
            ->whereBetween('appointment_datetime', [$currentMonthStart, $currentMonthEnd])
            ->count();

        return [
            'offline' => $countOfflineAppointments . ' hours',
            'online' => $countOnlineAppointments . ' hours',
            'total' => $countOnlineAppointments + $countOfflineAppointments . ' hours',
        ];
    }

    private function patientsServed(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        $patients = Patient::where('doctor_id', $doctorId)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->get();

        $allPatients = $patients->count();

        $regularPatients = $patients->filter(function ($patient) use ($currentMonthStart) {
            return $patient->created_at->startOfMonth() < $currentMonthStart;
        })->count();

        $newPatients = $allPatients - $regularPatients;

        return [
            'all_patients' => $allPatients,
            'regular_patients' => $regularPatients,
            'new_patients' => $newPatients,
        ];
    }

    private function notificationsOverview(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        $notifications = DoctorNotification::where('doctor_id', $doctorId)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd])
            ->get();

        $unreadNotifications = $notifications->where('read', false)->count();
        $readNotifications = $notifications->where('read', true)->count();
        $totalNotifications = $notifications->count();

        return [
            'total_notifications' => $totalNotifications,
            'unread_notifications' => $unreadNotifications,
            'read_notifications' => $readNotifications,
        ];
    }

    private function patientDemographics(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $patients = Patient::where('doctor_id', $doctorId)->get();

        $now = Carbon::now();

        $totalPatients = $patients->count();
        $adults = 0;
        $children = 0;

        foreach ($patients as $patient) {
            $age = $now->diffInYears(Carbon::parse($patient->date_of_birth));
            if ($age >= 18) {
                $adults++;
            } else {
                $children++;
            }
        }

        return [
            'total_patients' => $totalPatients,
            'adults' => $adults,
            'children' => $children,
        ];
    }

    private function patientPayments(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();
        $paymentQuery = Payment::where('doctor_id', $doctorId)
            ->whereBetween('created_at', [$currentMonthStart, $currentMonthEnd]);

        return [
            'processed_payment' => (clone $paymentQuery)->where('payment_status', PaymentStatus::PROCESSED)->count(),
            'complete_payment' => (clone $paymentQuery)->where('payment_status', PaymentStatus::PAID)->count(),
            'confirmed_payment' => (clone $paymentQuery)->where('payment_status', PaymentStatus::CONFIRMED)->count(),
        ];
    }

    public function store(DoctorDto $dto): Doctor
    {
        return Doctor::create($dto->toArray());
    }

    public function update(UpdateDoctorDto $dto, Doctor $doctor): Doctor
    {
        $doctorData = [
            "first_name" => $dto->first_name,
            "last_name" => $dto->last_name,
            "date_of_birth" => $dto->date_of_birth,
            "religion" => $dto->religion,
            "address" => $dto->address,
            "email" => $dto->email,
            "biography" => $dto->biography,
            "education" => $dto->education,
            "experience" => $dto->experience,
            "languages" => $dto->languages,
            "current_location" => $dto->current_location,
            "certifications" => $dto->certifications,
            "medical_license" => $dto->medical_license,
            "professional_memberships" => $dto->professional_memberships,
            "awards" => $dto->awards,
            "publications" => $dto->publications,
            "research_interests" => $dto->research_interests,
        ];

        if ($doctor->phone_number !== $dto->phone_number) {

            $existingDoctor = Doctor::where('phone_number', $dto->phone_number)->first();

            if (!$existingDoctor) {
                $doctorData['phone_number'] = $dto->phone_number;
            }
        }

        $doctor->update($doctorData);
        return $doctor;
    }

    public function destroy(Doctor $doctor): void
    {
        $doctor->delete();
    }
}
