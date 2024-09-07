<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\PatientVisit\PatientVisitRequest;

class PatientVisitDto
{
    public function __construct(
        public string $visit_date,
        public string $complaints,
        public string $symptoms,
        public string $treatment,
        public ?string $notes,
        public int $diagnose_id,
        public int $payment_id,
        public int $patient_id,
        public int $doctor_id,
        public int $insurance_id,
    ){}

    public static function fromPatientVisitRequest(PatientVisitRequest $request): PatientVisitDto
    {
        return new self(
            visit_date: $request->validated('visit_date'),
            complaints: $request->validated('complaints'),
            symptoms: $request->validated('symptoms'),
            treatment: $request->validated('treatment'),
            notes: $request->validated('notes'),
            diagnose_id: $request->validated('diagnose_id'),
            payment_id: $request->validated('payment_id'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id'),
            insurance_id: $request->validated('insurance_id'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
