<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Patient\PhysicalExaminationRequest;

class PhysicalExaminationDto
{
    public function __construct(
        public ?int $height,
        public ?int $weight,
        public ?int $heart_rate,
        public ?string $blood_pressure,
        public int $patient_id,
    ) {}

    public static function fromRequest(PhysicalExaminationRequest $request): PhysicalExaminationDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['height'] ?? null,
            $validatedData['weight'] ?? null,
            $validatedData['heart_rate'] ?? null,
            $validatedData['blood_pressure'] ?? null,
            $validatedData['patient_id'],
        );
    }
}
