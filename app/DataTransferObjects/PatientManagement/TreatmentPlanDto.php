<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Patient\TreatmentPlanRequest;

class TreatmentPlanDto
{
    public function __construct(
        public string $medicament_name,
        public string $medication_dosage,
        public string $medication_frequency,
        public string $medication_timing,
        public int $patient_id,
    ) {}

    public static function fromRequest(TreatmentPlanRequest $request): TreatmentPlanDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['medicament_name'],
            $validatedData['medication_dosage'],
            $validatedData['medication_frequency'],
            $validatedData['medication_timing'],
            $validatedData['patient_id'],
        );
    }
}
