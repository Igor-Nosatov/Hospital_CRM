<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\PatientManagement\Patient;

use App\Http\Resources\Api\V1\PatientManagement\InsuranceResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SinglePatientResource extends JsonResource
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
            'barcode' => $this->barcode,
            'gender' => $this->gender,
            'marital_status' => $this->marital_status,
            'status' => $this->status,
            'legal_representative_first_name' =>$this->legal_representative_first_name,
            'legal_representative_last_name' =>$this->legal_representative_last_name,
            'legal_representative_relationship' =>$this->legal_representative_relationship,
            'legal_representative_phone_number' =>$this->legal_representative_phone_number,
            'insurance' => new InsuranceResource($this->whenLoaded('insurance')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
