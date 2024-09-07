<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\MedicalStaff\Setting;
use App\Notifications\SettingNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class SettingObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Setting "created" event.
     */
    public function created(Setting $setting): void
    {
        $this->logCreate($setting);
        $this->notifyAdmin(SettingNotification::class, [
            'action' => 'created',
            'modelClass' => Setting::class,
        ]);
    }

    /**
     * Handle the Setting "updated" event.
     */
    public function updated(Setting $setting): void
    {
        $this->logUpdate($setting);
        $this->notifyAdmin(SettingNotification::class, [
            'action' => 'created',
            'modelClass' => Setting::class,
        ]);
    }

    /**
     * Handle the Setting "deleted" event.
     */
    public function deleted(Setting $setting): void
    {
        $this->logDelete($setting);
        $this->notifyAdmin(SettingNotification::class, [
            'action' => 'created',
            'modelClass' => Setting::class,
        ]);
    }

    /**
     * Handle the Setting "restored" event.
     */
    public function restored(Setting $setting): void
    {
        $this->logRestore($setting);
        $this->notifyAdmin(SettingNotification::class, [
            'action' => 'created',
            'modelClass' => Setting::class,
        ]);
    }
}
