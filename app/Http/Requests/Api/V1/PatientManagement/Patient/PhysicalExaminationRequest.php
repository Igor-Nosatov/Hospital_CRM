<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Patient;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class PhysicalExaminationRequest extends FormRequest
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
            'height' => [
                'nullable',
                'integer'
            ],
            'weight' => [
                'nullable',
                'integer'
            ],
            'heart_rate' => [
                'nullable',
                'integer'
            ],
            'blood_pressure' => [
                'nullable',
                'string',
                'max:255'
            ],
            'patient_id' => [
                'required',
                'integer',
                'exists:patients,id'
            ],
        ];
    }
}
