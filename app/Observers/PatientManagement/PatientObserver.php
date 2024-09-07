<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\Patient;
use App\Notifications\PatientNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class PatientObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Patient "created" event.
     */
    public function created(Patient $patient): void
    {
        $this->logCreate($patient);
        $this->notifyAdmin(PatientNotification::class, [
            'action' => 'created',
            'modelClass' => Patient::class,
        ]);
    }

    /**
     * Handle the Patient "updated" event.
     */
    public function updated(Patient $patient): void
    {
        $this->logUpdate($patient);
        $this->notifyAdmin(PatientNotification::class, [
            'action' => 'created',
            'modelClass' => Patient::class,
        ]);
    }

    /**
     * Handle the Patient "deleted" event.
     */
    public function deleted(Patient $patient): void
    {
        $this->logDelete($patient);
        $this->notifyAdmin(PatientNotification::class, [
            'action' => 'created',
            'modelClass' => Patient::class,
        ]);
    }

    /**
     * Handle the Patient "restored" event.
     */
    public function restored(Patient $patient): void
    {
        $this->logRestore($patient);
        $this->notifyAdmin(PatientNotification::class, [
            'action' => 'created',
            'modelClass' => Patient::class,
        ]);
    }
}
