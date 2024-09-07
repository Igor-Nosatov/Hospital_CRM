<?php

declare (strict_types = 1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\PaymentDto;
use App\Models\MedicalStaff\Payment;
use Illuminate\Database\Eloquent\Collection;
class PaymentService
{
    public function index():Collection
    {
        return Payment::get();
    }

    public function store(PaymentDto $dto): Payment
    {
        return Payment::create($dto->toArray());
    }

    public function destroy(Payment $payment): void
    {
        $payment->delete();
    }
}
