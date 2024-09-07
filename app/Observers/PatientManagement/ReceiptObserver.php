<?php

declare(strict_types=1);

namespace App\Observers\PatientManagement;

use App\Models\Documents\Receipt;
use App\Notifications\ReceiptNotification;
use App\Traits\LogsModelActions;
use App\Traits\NotifiesAdmin;

class ReceiptObserver
{
    use LogsModelActions, NotifiesAdmin;
    /**
     * Handle the Receipt "created" event.
     */
    public function created(Receipt $receipt): void
    {
        $this->logCreate($receipt);
        $this->notifyAdmin(ReceiptNotification::class, [
            'action' => 'created',
            'modelClass' => Receipt::class,
        ]);
    }

    /**
     * Handle the Receipt "updated" event.
     */
    public function updated(Receipt $receipt): void
    {
        $this->logUpdate($receipt);
        $this->notifyAdmin(ReceiptNotification::class, [
            'action' => 'created',
            'modelClass' => Receipt::class,
        ]);
    }

    /**
     * Handle the Receipt "deleted" event.
     */
    public function deleted(Receipt $receipt): void
    {
        $this->logDelete($receipt);
        $this->notifyAdmin(ReceiptNotification::class, [
            'action' => 'created',
            'modelClass' => Receipt::class,
        ]);
    }

    /**
     * Handle the Receipt "restored" event.
     */
    public function restored(Receipt $receipt): void
    {
        $this->logRestore($receipt);
        $this->notifyAdmin(ReceiptNotification::class, [
            'action' => 'created',
            'modelClass' => Receipt::class,
        ]);
    }

}
