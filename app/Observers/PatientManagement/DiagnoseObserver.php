<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\Diagnose;
use App\Notifications\DiagnoseNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class DiagnoseObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Diagnose "created" event.
     */
    public function created(Diagnose $diagnose): void
    {
        $this->logCreate($diagnose);
        $this->notifyAdmin(DiagnoseNotification::class, [
            'action' => 'created',
            'modelClass' => Diagnose::class,
        ]);
    }

    /**
     * Handle the Diagnose "updated" event.
     */
    public function updated(Diagnose $diagnose): void
    {
        $this->logUpdate($diagnose);
        $this->notifyAdmin(DiagnoseNotification::class, [
            'action' => 'created',
            'modelClass' => Diagnose::class,
        ]);
    }

    /**
     * Handle the Diagnose "deleted" event.
     */
    public function deleted(Diagnose $diagnose): void
    {
        $this->logDelete($diagnose);
        $this->notifyAdmin(DiagnoseNotification::class, [
            'action' => 'created',
            'modelClass' => Diagnose::class,
        ]);
    }

    /**
     * Handle the Diagnose "restored" event.
     */
    public function restored(Diagnose $diagnose): void
    {
        $this->logRestore($diagnose);
        $this->notifyAdmin(DiagnoseNotification::class, [
            'action' => 'created',
            'modelClass' => Diagnose::class,
        ]);
    }

}
