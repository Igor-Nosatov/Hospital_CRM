<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\Payment;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Meeting;
use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PatientVisit;
use App\Policies\Api\V1\MedicalStaff\DoctorPolicy;
use App\Policies\Api\V1\MedicalStaff\PaymentPolicy;
use App\Policies\Api\V1\PatientManagement\AppointmentPolicy;
use App\Policies\Api\V1\PatientManagement\MeetingPolicy;
use App\Policies\Api\V1\PatientManagement\PatientPolicy;
use App\Policies\Api\V1\PatientManagement\PatientVisitPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Doctor::class => DoctorPolicy::class,
        Patient::class => PatientPolicy::class,
        Appointment::class => AppointmentPolicy::class,
        Meeting::class => MeetingPolicy::class,
        Payment::class => PaymentPolicy::class,
        PatientVisit::class => PatientVisitPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {

    }
}
