<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\PhysicalExamination;
use App\Notifications\PhysicalExaminationNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class PhysicalExaminationObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the PhysicalExamination "created" event.
     */
    public function created(PhysicalExamination $physicalExamination): void
    {
        $this->logCreate($physicalExamination);
        $this->notifyAdmin(PhysicalExaminationNotification::class, [
            'action' => 'created',
            'modelClass' => PhysicalExamination::class,
        ]);
    }

    /**
     * Handle the PhysicalExamination "updated" event.
     */
    public function updated(PhysicalExamination $physicalExamination): void
    {
        $this->logUpdate($physicalExamination);
        $this->notifyAdmin(PhysicalExaminationNotification::class, [
            'action' => 'created',
            'modelClass' => PhysicalExamination::class,
        ]);
    }

    /**
     * Handle the PhysicalExamination "deleted" event.
     */
    public function deleted(PhysicalExamination $physicalExamination): void
    {
        $this->logDelete($physicalExamination);
        $this->notifyAdmin(PhysicalExaminationNotification::class, [
            'action' => 'created',
            'modelClass' => PhysicalExamination::class,
        ]);
    }

    /**
     * Handle the PhysicalExamination "restored" event.
     */
    public function restored(PhysicalExamination $physicalExamination): void
    {
        $this->logRestore($physicalExamination);
        $this->notifyAdmin(PhysicalExaminationNotification::class, [
            'action' => 'created',
            'modelClass' => PhysicalExamination::class,
        ]);
    }
}
