<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PatientNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected string $action,
        protected string $modelClass
    ) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->line("Action: {$this->action}")
            ->line("Model: {$this->modelClass}")
            ->line('Thank you for using our hospital crm application!');
    }

    public function viaConnection($notifiable)
    {
        return 'rabbitmq';
    }

    /**
     * Determine the queue name.
     */
    public function viaQueue($notifiable)
    {
        return 'notifications';
    }
}
