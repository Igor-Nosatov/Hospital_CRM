<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\MedicalStaff\Doctor;

use App\Http\Resources\Api\V1\Auth\UserResource;
use App\Http\Resources\Api\V1\MedicalStaff\SpecialityResource;
use App\Http\Resources\Api\V1\MedicalStaff\DepartmentResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleDoctorResource extends JsonResource
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
            'religion' =>  $this->religion,
            'address' =>  $this->address,
            'phone_number' => $this->phone_number,
            'home_number' =>  $this->home_number,
            'other_phone_number' =>  $this->other_phone_number,
            'gender' =>  $this->gender,
            'marital_status' => $this->marital_status,
            'status' =>  $this->status,
            'speciality' => new SpecialityResource($this->whenLoaded('speciality')),
            'department' => new DepartmentResource($this->whenLoaded('department')),
            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}
