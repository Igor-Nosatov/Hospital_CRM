<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\Documents\SickList;
use App\Notifications\SickListNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class SickListObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the SickList "created" event.
     */
    public function created(SickList $sickList): void
    {
        $this->logCreate($sickList);
        $this->notifyAdmin(SickListNotification::class, [
            'action' => 'created',
            'modelClass' => SickList::class,
        ]);
    }

    /**
     * Handle the SickList "updated" event.
     */
    public function updated(SickList $sickList): void
    {
        $this->logUpdate($sickList);
        $this->notifyAdmin(SickListNotification::class, [
            'action' => 'created',
            'modelClass' => SickList::class,
        ]);
    }

    /**
     * Handle the SickList "deleted" event.
     */
    public function deleted(SickList $sickList): void
    {
        $this->logDelete($sickList);
        $this->notifyAdmin(SickListNotification::class, [
            'action' => 'created',
            'modelClass' => SickList::class,
        ]);
    }

    /**
     * Handle the SickList "restored" event.
     */
    public function restored(SickList $sickList): void
    {
        $this->logRestore($sickList);
        $this->notifyAdmin(SickListNotification::class, [
            'action' => 'created',
            'modelClass' => SickList::class,
        ]);
    }
}
