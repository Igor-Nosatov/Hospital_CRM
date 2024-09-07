<?php

declare(strict_types=1);

namespace App\Http\Resources\Api\V1\MedicalStaff\Payment;

use App\Http\Resources\Api\V1\MedicalStaff\Doctor\DoctorResource;
use App\Http\Resources\Api\V1\PatientManagement\Patient\PatientResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PaymentResource extends JsonResource
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
            'amount' => $this->amount,
            'payment_date' => $this->payment_date,
            'payment_status' => $this->payment_status,
            'payment_method' => $this->payment_method,
            'transaction_id' => $this->transaction_id,
            'card_expiry_date' => $this->card_expiry_date,
            'comments' => $this->comments,
            'currency' => $this->currency,
            'patient' => new PatientResource($this->whenLoaded('patient')),
            'doctor' => new DoctorResource($this->whenLoaded('doctor')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
