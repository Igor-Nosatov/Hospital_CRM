<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\MedicalStaff\Doctor;

use App\Http\Resources\Api\V1\MedicalStaff\DepartmentResource;
use App\Http\Resources\Api\V1\MedicalStaff\SpecialityResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DoctorResource extends JsonResource
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
            'first_name' =>  $this->first_name,
            'last_name' =>  $this->last_name,
            'date_of_birth' =>  $this->date_of_birth,
            'address' =>  $this->address,
            'phone_number' => $this->phone_number,
            'speciality' => new SpecialityResource($this->whenLoaded('speciality')),
            'department' => new DepartmentResource($this->whenLoaded('department')),
        ];
    }
}
