<?php

declare(strict_types=1);

namespace App\DataTransferObjects\Documents;

use App\Http\Requests\Api\V1\Documents\SickList\SickListRequest;

class SickListDto
{
    public function __construct(
        public string $description,
        public string $valid_until_date,
        public int $patient_id,
        public int $doctor_id,
        public ?int $diagnose_id,
        public ?int $receipt_id
    ) {}

    public static function fromSickListRequest(SickListRequest $request): SickListDto
    {
        return new self(
            description: $request->validated('description'),
            valid_until_date: $request->validated('valid_until_date'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id'),
            diagnose_id: $request->validated('diagnose_id') ?? null,
            receipt_id: $request->validated('receipt_id') ?? null
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
