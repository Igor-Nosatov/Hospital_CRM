<?php

declare(strict_types=1);

namespace App\Traits;

use Illuminate\Support\Facades\Notification;

trait NotifiesAdmin
{
    /**
     * @var string
     */
    protected string $adminEmail;

    public function __construct()
    {
        $this->adminEmail = env('ADMIN_EMAIL');
    }

    /**
     * @param string $notificationClass
     * @param array $params
     * @return void
     */
    protected function notifyAdmin(string $notificationClass, array $params): void
    {
        if ($this->adminEmail) {
            $notificationInstance = app()->make($notificationClass, $params);

            Notification::route('mail', $this->adminEmail)
                ->notify($notificationInstance);
        }
    }
}
