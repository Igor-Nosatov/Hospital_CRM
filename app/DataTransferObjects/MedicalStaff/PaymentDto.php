<?php

declare(strict_types=1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\Payment\PaymentRequest;

class PaymentDto
{
    public function __construct(
        public int $amount,
        public string $payment_date,
        public string $payment_status,
        public string $payment_method,
        public ?string $transaction_id,
        public ?string $card_expiry_date,
        public ?string $comments,
        public string $currency,
        public int $patient_id,
        public int $doctor_id
    ){}

    public static function fromPaymentRequest(PaymentRequest $request): PaymentDto
    {
        return new self(
            amount:(int)  $request->validated('amount'),
            payment_date: $request->validated('payment_date'),
            payment_status: $request->validated('payment_status'),
            payment_method: $request->validated('payment_method'),
            transaction_id: $request->validated('transaction_id'),
            card_expiry_date: $request->validated('card_expiry_date'),
            comments: $request->validated('comments'),
            currency: $request->validated('currency'),
            patient_id:(int) $request->validated('patient_id'),
            doctor_id:(int) $request->validated('doctor_id')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
