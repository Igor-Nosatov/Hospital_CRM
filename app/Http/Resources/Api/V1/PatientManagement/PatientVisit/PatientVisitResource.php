<?php

namespace App\Http\Resources\Api\V1\PatientManagement\PatientVisit;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientVisitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'visit_date' => $this->visit_date,
            'complaints' => $this->complaints,
            'symptoms' => $this->symptoms,
            'medical_history' => $this->medical_history,
            'physical_examination' => $this->physical_examination,
            'insurance_details' => $this->insurance_details,
            'billing_details' => $this->billing_details,
            'companion_name' => $this->companion_name,
            'companion_relation' => $this->companion_relation,
        ];
    }
}
