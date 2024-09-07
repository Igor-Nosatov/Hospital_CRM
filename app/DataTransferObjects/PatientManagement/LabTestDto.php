<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Patient\LabTestRequest;
use DateTime;
use Illuminate\Support\Facades\Log;

class LabTestDto
{
    public function __construct(
        public string $title,
        public string $date_of_medical_analysis,
        public string $disk,
        public int $doctor_id,
        public int $patient_id,
        public mixed $file
    ) {}

    public static function fromRequest(LabTestRequest $request): LabTestDto
    {
        return new self(
            date_of_medical_analysis: $request->validated('date_of_medical_analysis'),
            title: $request->validated('title'),
            disk: $request->input('disk', 'local'),
            doctor_id: (int) $request->validated('doctor_id'),
            patient_id: (int) $request->validated('patient_id'),
            file:$request->validated('file'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
