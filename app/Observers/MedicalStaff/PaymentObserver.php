<?php

declare(strict_types=1);

namespace App\Observers\MedicalStaff;

use App\Models\MedicalStaff\Payment;
use App\Traits\LogsModelActions;

class PaymentObserver
{
    use LogsModelActions;
    /**
     * Handle the Payment "created" event.
     */
    public function created(Payment $payment): void
    {
        $this->logCreate($payment);
    }

    /**
     * Handle the Payment "updated" event.
     */
    public function updated(Payment $payment): void
    {
        $this->logUpdate($payment);
    }

    /**
     * Handle the Payment "deleted" event.
     */
    public function deleted(Payment $payment): void
    {
        $this->logDelete($payment);
    }

    /**
     * Handle the Payment "restored" event.
     */
    public function restored(Payment $payment): void
    {
        $this->logRestore($payment);
    }
}
