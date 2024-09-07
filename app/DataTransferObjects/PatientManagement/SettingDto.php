<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\MedicalStaff\UpdateSettingRequest;
use App\Http\Requests\Api\V1\PatientManagement\Setting\SettingRequest;

class SettingDto
{
    public function __construct(
        public string $setting_status,
        public int $id
    ) {}

    public static function fromSettingRequest(UpdateSettingRequest $request, int $id): SettingDto
    {
        return new self(
            setting_status: $request->validated('setting_status'),
            id: $id,
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
