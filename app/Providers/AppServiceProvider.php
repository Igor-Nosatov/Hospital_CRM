<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\Documents\Receipt;
use App\Models\Documents\SickList;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorPhoto;
use App\Models\MedicalStaff\MedicalEvent;
use App\Models\MedicalStaff\Payment;
use App\Models\MedicalStaff\Setting;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Diagnose;
use App\Models\PatientManagement\HelpDesk;
use App\Models\PatientManagement\Insurance;
use App\Models\PatientManagement\Meeting;
use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PatientDoc;
use App\Models\PatientManagement\PatientVisit;
use App\Models\PatientManagement\PhysicalExamination;
use App\Observers\MedicalStaff\DoctorObserver;
use App\Observers\MedicalStaff\DoctorPhotoObserver;
use App\Observers\MedicalStaff\HelpDeskObserver;
use App\Observers\MedicalStaff\MedicalEventObserver;
use App\Observers\MedicalStaff\PaymentObserver;
use App\Observers\MedicalStaff\SettingObserver;
use App\Observers\PatientManagement\AppointmentObserver;
use App\Observers\PatientManagement\DiagnoseObserver;
use App\Observers\PatientManagement\InsuranceObserver;
use App\Observers\PatientManagement\MeetingObserver;
use App\Observers\PatientManagement\PatientDocObserver;
use App\Observers\PatientManagement\PatientObserver;
use App\Observers\PatientManagement\PatientVisitObserver;
use App\Observers\PatientManagement\PhysicalExaminationObserver;
use App\Observers\PatientManagement\ReceiptObserver;
use App\Observers\PatientManagement\SickListObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Doctor::observe(DoctorObserver::class);
        DoctorPhoto::observe(DoctorPhotoObserver::class);
        HelpDesk::observe(HelpDeskObserver::class);
        MedicalEvent::observe(MedicalEventObserver::class);
        HelpDesk::observe(HelpDeskObserver::class);
        MedicalEvent::observe(MedicalEventObserver::class);
        Payment::observe(PaymentObserver::class);
        Setting::observe(SettingObserver::class);
        Appointment::observe(AppointmentObserver::class);
        Diagnose::observe(DiagnoseObserver::class);
        Insurance::observe(InsuranceObserver::class);
        Meeting::observe(MeetingObserver::class);
        PatientDoc::observe(PatientDocObserver::class);
        Patient::observe(PatientObserver::class);
        PatientVisit::observe(PatientVisitObserver::class);
        PhysicalExamination::observe(PhysicalExaminationObserver::class);
        Receipt::observe(ReceiptObserver::class);
        SickList::observe(SickListObserver::class);
    }
}
