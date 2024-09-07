<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Patient;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class TreatmentPlanRequest extends FormRequest
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
     * @return array<string, array<string>>
     */
    public function rules(): array
    {
        return [
            'medicament_name' => [
                'required',
                'string',
                'max:255'
            ],
            'medication_dosage' => [
                'required',
                'string',
                'max:255'
            ],
            'medication_frequency' => [
                'required',
                'string',
                'max:255'
            ],
            'medication_timing' => [
                'required',
                'string'
            ],
            'patient_id' => [
                'required',
                'integer',
                'exists:patients,id'
            ],
        ];
    }
}
