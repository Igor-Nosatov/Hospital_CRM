<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\PatientDoc;
use App\Notifications\PatientDocNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class PatientDocObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the PatientDoc "created" event.
     */
    public function created(PatientDoc $patientDoc): void
    {
        $this->logCreate($patientDoc);
        $this->notifyAdmin(PatientDocNotification::class, [
            'action' => 'created',
            'modelClass' => PatientDoc::class,
        ]);
    }

    /**
     * Handle the PatientDoc "updated" event.
     */
    public function updated(PatientDoc $patientDoc): void
    {
        $this->logUpdate($patientDoc);
        $this->notifyAdmin(PatientDocNotification::class, [
            'action' => 'created',
            'modelClass' => PatientDoc::class,
        ]);
    }

    /**
     * Handle the PatientDoc "deleted" event.
     */
    public function deleted(PatientDoc $patientDoc): void
    {
        $this->logDelete($patientDoc);
        $this->notifyAdmin(PatientDocNotification::class, [
            'action' => 'created',
            'modelClass' => PatientDoc::class,
        ]);
    }

    /**
     * Handle the PatientDoc "restored" event.
     */
    public function restored(PatientDoc $patientDoc): void
    {
        $this->logRestore($patientDoc);
        $this->notifyAdmin(PatientDocNotification::class, [
            'action' => 'created',
            'modelClass' => PatientDoc::class,
        ]);
    }
}
