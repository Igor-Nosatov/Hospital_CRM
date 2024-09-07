<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\MedicalStaff;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'setting_name' => $this->setting_name,
            'setting_status' => $this->setting_status,
        ];
    }
}
