<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\PatientManagement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InsuranceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'insurance_name' => $this->insurance_name,
            'policy_number' => $this->policy_number,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'policy_holder_name' => $this->policy_holder_name,
            'policy_holder_relationship' => $this->policy_holder_relationship,
            'contact_number' => $this->contact_number,
            'premium_amount' => $this->premium_amount,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
