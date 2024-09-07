<?php

declare(strict_types=1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\Doctor\UpdateDoctorRequest;

class UpdateDoctorDto
{
    public function __construct(
        public string $first_name,
        public string $last_name,
        public string $date_of_birth,
        public ?string $religion,
        public string $address,
        public ?string $phone_number,
        public string $email,
        public ?string $biography,
        public ?array $education,
        public ?array $experience,
        public ?array $languages,
        public ?array $current_location,
        public ?array $certifications,
        public ?array $medical_license,
        public ?array $professional_memberships,
        public ?array $awards,
        public ?array $publications,
        public ?array $research_interests,
    ) {}

    public static function fromDoctorRequest(UpdateDoctorRequest $request): UpdateDoctorDto
    {
        $validated = $request->validated();

        return new self(
            first_name: $validated['first_name'] ?? '',
            last_name: $validated['last_name'] ?? '',
            date_of_birth: $validated['date_of_birth'] ?? '',
            religion: $validated['religion'] ?? null,
            address: $validated['address'] ?? '',
            phone_number: $validated['phone_number'] ?? null,
            email: $validated['email'] ?? '',
            biography: $validated['biography'] ?? null,
            education: $validated['education'] ?? [],
            experience: $validated['experience'] ?? [],
            languages: $validated['languages'] ?? [],
            current_location: $validated['current_location'] ?? [],
            certifications: $validated['certifications'] ?? [],
            medical_license: $validated['medical_license'] ?? [],
            professional_memberships: $validated['professional_memberships'] ?? [],
            awards: $validated['awards'] ?? [],
            publications: $validated['publications'] ?? [],
            research_interests: $validated['research_interests'] ?? [],
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
