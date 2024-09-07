<?php

declare(strict_types=1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\Doctor\DoctorRequest;

class DoctorDto
{
    public function __construct(
        public ?string $working_mode,
        public string $first_name,
        public string $last_name,
        public string $date_of_birth,
        public string $religion,
        public string $address,
        public ?string $phone_number,
        public ?string $home_number,
        public ?string $other_phone_number,
        public string $marital_status,
        public string $status,
        public int $speciality_id,
        public int $department_id,
        public int $country_id,
        public int $user_id,
    ) {}

    public static function fromDoctorRequest(DoctorRequest $request): DoctorDto
    {
        return new self(
            working_mode: $request->validated('working_mode'),
            first_name: $request->validated('first_name'),
            last_name: $request->validated('last_name'),
            date_of_birth: $request->validated('date_of_birth'),
            religion: $request->validated('religion'),
            address: $request->validated('address'),
            phone_number: $request->validated('phone_number'),
            home_number: $request->validated('home_number'),
            other_phone_number: $request->validated('other_phone_number'),
            marital_status: $request->validated('marital_status'),
            status: $request->validated('status'),
            speciality_id:(int) $request->validated('speciality_id'),
            department_id:(int) $request->validated('department_id'),
            country_id:(int) $request->validated('country_id'),
            user_id:(int) $request->validated('user_id'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}

