<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\MedicalStaff\DoctorPhoto;
use App\Traits\LogsModelActions;

class DoctorPhotoObserver
{
    use LogsModelActions;
    /**
     * Handle the DoctorPhoto "created" event.
     */
    public function created(DoctorPhoto $doctorPhoto): void
    {
        $this->logCreate($doctorPhoto);
    }

    /**
     * Handle the DoctorPhoto "updated" event.
     */
    public function updated(DoctorPhoto $doctorPhoto): void
    {
        $this->logUpdate($doctorPhoto);
    }

    /**
     * Handle the DoctorPhoto "deleted" event.
     */
    public function deleted(DoctorPhoto $doctorPhoto): void
    {
        $this->logDelete($doctorPhoto);
    }

    /**
     * Handle the DoctorPhoto "restored" event.
     */
    public function restored(DoctorPhoto $doctorPhoto): void
    {
        $this->logRestore($doctorPhoto);
    }
}
