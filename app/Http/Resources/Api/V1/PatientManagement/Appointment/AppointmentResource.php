<?php

namespace App\Http\Resources\Api\V1\PatientManagement\Appointment;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
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
            'appointment_datetime' => $this->appointment_datetime,
            'reason' => $this->reason,
            'symptoms' => $this->symptoms,
            'notes' => $this->notes,
            'status' => $this->status,
        ];
    }
}
