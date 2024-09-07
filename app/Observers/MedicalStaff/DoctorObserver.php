<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\MedicalStaff\Doctor;
use App\Traits\LogsModelActions;

class DoctorObserver
{
    use LogsModelActions;
    /**
     * Handle the Doctor "created" event.
     */
    public function created(Doctor $doctor): void
    {
        $this->logCreate($doctor);
    }

    /**
     * Handle the Doctor "updated" event.
     */
    public function updated(Doctor $doctor): void
    {
        $this->logUpdate($doctor);
    }

    /**
     * Handle the Doctor "deleted" event.
     */
    public function deleted(Doctor $doctor): void
    {
        $this->logDelete($doctor);
    }

    /**
     * Handle the Doctor "restored" event.
     */
    public function restored(Doctor $doctor): void
    {
        $this->logRestore($doctor);
    }
}
