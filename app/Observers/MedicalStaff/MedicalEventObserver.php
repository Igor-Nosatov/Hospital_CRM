<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\MedicalStaff\MedicalEvent;
use App\Notifications\MedicalEventNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class MedicalEventObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the MedicalEvent "created" event.
     */
    public function created(MedicalEvent $medicalEvent): void
    {
        $this->logCreate($medicalEvent);
        $this->notifyAdmin(MedicalEventNotification::class, [
            'action' => 'created',
            'modelClass' => MedicalEvent::class,
        ]);
    }

    /**
     * Handle the MedicalEvent "updated" event.
     */
    public function updated(MedicalEvent $medicalEvent): void
    {
        $this->logUpdate($medicalEvent);
        $this->notifyAdmin(MedicalEventNotification::class, [
            'action' => 'created',
            'modelClass' => MedicalEvent::class,
        ]);
    }

    /**
     * Handle the MedicalEvent "deleted" event.
     */
    public function deleted(MedicalEvent $medicalEvent): void
    {
        $this->logDelete($medicalEvent);
        $this->notifyAdmin(MedicalEventNotification::class, [
            'action' => 'created',
            'modelClass' => MedicalEvent::class,
        ]);
    }

    /**
     * Handle the MedicalEvent "restored" event.
     */
    public function restored(MedicalEvent $medicalEvent): void
    {
        $this->logRestore($medicalEvent);
        $this->notifyAdmin(MedicalEventNotification::class, [
            'action' => 'created',
            'modelClass' => MedicalEvent::class,
        ]);
    }
}
