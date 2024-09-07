<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\PatientManagement\HelpDesk;
use App\Traits\LogsModelActions;

class HelpDeskObserver
{
    use LogsModelActions;
    /**
     * Handle the HelpDesk "created" event.
     */
    public function created(HelpDesk $helpDesk): void
    {
        $this->logCreate($helpDesk);
    }

    /**
     * Handle the HelpDesk "updated" event.
     */
    public function updated(HelpDesk $helpDesk): void
    {
        $this->logUpdate($helpDesk);
    }

    /**
     * Handle the HelpDesk "deleted" event.
     */
    public function deleted(HelpDesk $helpDesk): void
    {
        $this->logDelete($helpDesk);
    }

    /**
     * Handle the HelpDesk "restored" event.
     */
    public function restored(HelpDesk $helpDesk): void
    {
        $this->logRestore($helpDesk);
    }

}
