<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\PatientDoc\PatientDocRequest;

class PatientDocDto
{
    public function __construct(
        public string $title,
        public string $document_type,
        public string $document_name,
        public string $disk,
        public int $patient_id,
        public int $doctor_id,
        public mixed $file
    ) {
    }

    public static function fromPatientDocRequest(PatientDocRequest $request): PatientDocDto
    {
        return new self(
            title: $request->validated('title'),
            document_type: $request->validated('document_type'),
            document_name: $request->validated('document_name'),
            disk: $request->input('disk', 'local'),
            doctor_id: (int) $request->input('doctor_id'),
            patient_id: (int) $request->input('patient_id'),
            file:$request->validated('file'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
