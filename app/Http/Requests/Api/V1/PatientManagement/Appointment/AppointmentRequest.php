<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Appointment;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class AppointmentRequest extends FormRequest
{
    use ValidationExceptionTrait;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<string>|string>
     */
    public function rules(): array
    {
        return [
            'appointment_datetime' => [
                'required',
                'date'
            ],
            'reason' => [
                'nullable',
                'string',
                'max:1024'
            ],
            'symptoms' => [
                'nullable',
                'string',
                'max:1024'
            ],
            'notes' => [
                'nullable',
                'string',
                'max:1024'
            ],
            'status' => [
                'required',
                'string'
            ],
            'type' => [
                'required',
                'string'
            ],
            'reminder_datetime' => [
                'nullable',
                'date'
            ],
            'patient_id' => [
                'required',
                'exists:patients,id'
            ],
            'doctor_id' => [
                'required',
                'exists:doctors,id'
            ],
            'medical_service_id' => [
                'required',
                'exists:medical_services,id'
            ],
        ];
    }
}
