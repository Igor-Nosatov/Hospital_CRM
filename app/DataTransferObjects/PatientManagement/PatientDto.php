<?php

declare (strict_types = 1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Patient\PatientRequest;

class PatientDto
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $date_of_birth,
        public string $religion,
        public string $occupation,
        public string $address,
        public ?string $phone_number,
        public string $identity_code,
        public string $legal_representative_first_name,
        public string $legal_representative_last_name,
        public string $legal_representative_relationship,
        public string $legal_representative_phone_number,
        public string $marital_status,
        public int $doctor_id,
    ) {}

    public static function fromPatientRequest(PatientRequest $request): PatientDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['first_name'],
            $validatedData['last_name'],
            $validatedData['date_of_birth'],
            $validatedData['religion'],
            $validatedData['occupation'],
            $validatedData['address'],
            $validatedData['phone_number'] ?? null,
            $validatedData['identity_code'],
            $validatedData['legal_representative_first_name'],
            $validatedData['legal_representative_last_name'],
            $validatedData['legal_representative_relationship'],
            $validatedData['legal_representative_phone_number'],
            $validatedData['marital_status'],
            $validatedData['doctor_id']
        );
    }
}
