<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\PatientManagement\Patient;

use App\Http\Resources\Api\V1\PatientManagement\InsuranceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'date_of_birth' => $this->date_of_birth,
            'religion' => $this->religion,
            'occupation' => $this->occupation,
            'address' => $this->address,
            'phone_number' => $this->phone_number,
            'marital_status' => $this->marital_status,
        ];
    }
}
