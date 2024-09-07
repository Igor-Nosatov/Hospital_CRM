<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Patient;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class LabTestRequest extends FormRequest
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
     * @return array<string, string|array<string>>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'max:255'
            ],
            'date_of_medical_analysis' => [
                'required',
                'string'
            ],
            'file' => [
                'required',
                'file',
                'mimes:jpeg,png,pdf',
                'max:2048'
            ],
            'patient_id' => [
                'required',
                'exists:patients,id'
            ],
            'doctor_id' => [
                'required',
                'exists:doctors,id'
            ],
        ];
    }
}
