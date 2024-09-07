<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\Meeting;
use App\Notifications\MeetingNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class MeetingObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Meeting "created" event.
     */
    public function created(Meeting $meeting): void
    {
        $this->logCreate($meeting);
        $this->notifyAdmin(MeetingNotification::class, [
            'action' => 'created',
            'modelClass' => Meeting::class,
        ]);
    }

    /**
     * Handle the Meeting "updated" event.
     */
    public function updated(Meeting $meeting): void
    {
        $this->logUpdate($meeting);
        $this->notifyAdmin(MeetingNotification::class, [
            'action' => 'created',
            'modelClass' => Meeting::class,
        ]);
    }

    /**
     * Handle the Meeting "deleted" event.
     */
    public function deleted(Meeting $meeting): void
    {
        $this->logDelete($meeting);
        $this->notifyAdmin(MeetingNotification::class, [
            'action' => 'created',
            'modelClass' => Meeting::class,
        ]);
    }

    /**
     * Handle the Meeting "restored" event.
     */
    public function restored(Meeting $meeting): void
    {
        $this->logRestore($meeting);
        $this->notifyAdmin(MeetingNotification::class, [
            'action' => 'created',
            'modelClass' => Meeting::class,
        ]);
    }
}
