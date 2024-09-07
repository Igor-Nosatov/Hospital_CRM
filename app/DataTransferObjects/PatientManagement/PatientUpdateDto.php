<?php

declare (strict_types = 1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Patient\PatientUpdateRequest;

class PatientUpdateDto
{
    public function __construct(
        public ?string $first_name,
        public ?string $last_name,
        public ?string $date_of_birth,
        public ?string $religion,
        public ?string $occupation,
        public ?string $address,
        public ?string $phone_number,
        public ?string $legal_representative_first_name,
        public ?string $legal_representative_last_name,
        public ?string $legal_representative_relationship,
        public ?string $legal_representative_phone_number,
        public ?string $marital_status,
        public ?string $status
    ) {}

    public static function fromPatientRequest(PatientUpdateRequest $request): PatientUpdateDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['first_name'] ?? null,
            $validatedData['last_name'] ?? null,
            $validatedData['date_of_birth'] ?? null,
            $validatedData['religion'] ?? null,
            $validatedData['occupation'] ?? null,
            $validatedData['address'] ?? null,
            $validatedData['phone_number'] ?? null,
            $validatedData['legal_representative_first_name'] ?? null,
            $validatedData['legal_representative_last_name'] ?? null,
            $validatedData['legal_representative_relationship'] ?? null,
            $validatedData['legal_representative_phone_number'] ?? null,
            $validatedData['marital_status'] ?? null,
            $validatedData['status'] ?? null
        );
    }
}
