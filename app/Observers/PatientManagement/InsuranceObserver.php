<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\Insurance;
use App\Notifications\InsuranceNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class InsuranceObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Insurance "created" event.
     */
    public function created(Insurance $insurance): void
    {
        $this->logCreate($insurance);
        $this->notifyAdmin(InsuranceNotification::class, [
            'action' => 'created',
            'modelClass' => Insurance::class,
        ]);
    }

    /**
     * Handle the Insurance "updated" event.
     */
    public function updated(Insurance $insurance): void
    {
        $this->logUpdate($insurance);
        $this->notifyAdmin(InsuranceNotification::class, [
            'action' => 'created',
            'modelClass' => Insurance::class,
        ]);
    }

    /**
     * Handle the Insurance "deleted" event.
     */
    public function deleted(Insurance $insurance): void
    {
        $this->logDelete($insurance);
        $this->notifyAdmin(InsuranceNotification::class, [
            'action' => 'created',
            'modelClass' => Insurance::class,
        ]);
    }

    /**
     * Handle the Insurance "restored" event.
     */
    public function restored(Insurance $insurance): void
    {
        $this->logRestore($insurance);
        $this->notifyAdmin(InsuranceNotification::class, [
            'action' => 'created',
            'modelClass' => Insurance::class,
        ]);
    }
}
