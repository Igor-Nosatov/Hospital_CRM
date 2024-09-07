<?php

declare(strict_types=1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\UpdateSettingRequest;

class UpdateSettingDto
{
    public function __construct(
        public string $setting_status,
        public int $setting_id
    ) {}

    public static function fromRequest(UpdateSettingRequest $request, int $id): UpdateSettingDto
    {
        return new self(
            setting_status: $request->validated()['setting_status'],
            setting_id: $id
        );
    }

    public function toArray(): array
    {
        return [
            'setting_status' => $this->setting_status,
            'setting_id' => $this->setting_id,
        ];
    }
}
