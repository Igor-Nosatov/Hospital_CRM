<?php

declare(strict_types=1);

namespace App\DataTransferObjects\Documents;

use App\Http\Requests\Api\V1\Documents\Receipt\ReceiptRequest;

class ReceiptDto
{
    public function __construct(
        public string $name,
        public string $valid_until_date,
        public string $barcode,
        public string $status,
        public int $patient_id,
        public int $doctor_id
    ) {}

    public static function fromReceiptRequest(ReceiptRequest $request): ReceiptDto
    {
        return new self(
            name: $request->validated('name'),
            valid_until_date: $request->validated('valid_until_date'),
            barcode: $request->validated('barcode'),
            status: $request->validated('status'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
