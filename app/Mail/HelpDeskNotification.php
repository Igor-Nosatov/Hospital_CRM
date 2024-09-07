<?php

declare(strict_types=1);

namespace App\Mail;

use App\Models\PatientManagement\HelpDesk;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class HelpDeskNotification extends Mailable
{
    use Queueable, SerializesModels;

    public HelpDesk $helpDesk;

    public function __construct(HelpDesk $helpDesk)
    {
        $this->helpDesk = $helpDesk;
    }

    public function build()
    {
        return $this->subject('New Help Desk Ticket')
                    ->view('emails.help_desk_notification')
                    ->with([
                        'title' => $this->helpDesk->title,
                        'description' => $this->helpDesk->description,
                    ]);
    }
}
