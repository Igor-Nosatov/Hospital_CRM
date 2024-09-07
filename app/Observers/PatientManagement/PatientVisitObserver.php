<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\PatientVisit;
use App\Notifications\PatientVisitNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class PatientVisitObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the PatientVisit "created" event.
     */
    public function created(PatientVisit $patientVisit): void
    {
        $this->logCreate($patientVisit);
        $this->notifyAdmin( PatientVisitNotification::class, [
            'action' => 'created',
            'modelClass' =>  PatientVisit::class,
        ]);
    }

    /**
     * Handle the PatientVisit "updated" event.
     */
    public function updated(PatientVisit $patientVisit): void
    {
        $this->logUpdate($patientVisit);
        $this->notifyAdmin( PatientVisitNotification::class, [
            'action' => 'created',
            'modelClass' =>  PatientVisit::class,
        ]);
    }

    /**
     * Handle the PatientVisit "deleted" event.
     */
    public function deleted(PatientVisit $patientVisit): void
    {
        $this->logDelete($patientVisit);
        $this->notifyAdmin( PatientVisitNotification::class, [
            'action' => 'created',
            'modelClass' =>  PatientVisit::class,
        ]);
    }

    /**
     * Handle the PatientVisit "restored" event.
     */
    public function restored(PatientVisit $patientVisit): void
    {
        $this->logRestore($patientVisit);
        $this->notifyAdmin( PatientVisitNotification::class, [
            'action' => 'created',
            'modelClass' =>  PatientVisit::class,
        ]);
    }
}
