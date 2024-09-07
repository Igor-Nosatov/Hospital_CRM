<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\PatientManagement\Appointment;
use App\Notifications\AppointmentNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class AppointmentObserver
{
    use LogsModelActions, NotifiesAdmin;

    public function created(Appointment $appointment): void
    {
        $this->logCreate($appointment);
        $this->notifyAdmin(AppointmentNotification::class, [
            'action' => 'created',
            'modelClass' => Appointment::class,
        ]);
    }

    public function updated(Appointment $appointment): void
    {
        $this->logUpdate($appointment);
        $this->notifyAdmin(AppointmentNotification::class, [
            'action' => 'updated',
            'modelClass' => Appointment::class,
        ]);
    }

    public function deleted(Appointment $appointment): void
    {
        $this->logDelete($appointment);
        $this->notifyAdmin(AppointmentNotification::class, [
            'action' => 'deleted',
            'modelClass' => Appointment::class,
        ]);
    }

    public function restored(Appointment $appointment): void
    {
        $this->logRestore($appointment);
        $this->notifyAdmin(AppointmentNotification::class, [
            'action' => 'restored',
            'modelClass' => Appointment::class,
        ]);
    }
}
