<?php

declare(strict_types=1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\Speciality\SpecialityRequest;

class StoreMedicalEventDTO
{
    public function __construct(
        public string $name,
        public string $description
    ) {}

    public static function fromSpecialityRequest(SpecialityRequest $request): StoreMedicalEventDTO
    {
        return new self(
            name: $request->validated('name'),
            description: $request->validated('description')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
