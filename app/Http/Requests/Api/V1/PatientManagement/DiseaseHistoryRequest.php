<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Traits\ValidationExceptionTrait;

class DiseaseHistoryRequest extends FormRequest
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
            'date_of_onset' => [
                'required',
                'date'
            ],
            'diagnosis' => [
                'required',
                'string'
            ],
            'symptoms' => [
                'required',
                'string'
            ],
            'treatment' => [
                'nullable',
                'string'
            ],
            'previous_interventions' => [
                'nullable',
                'string'
            ],
            'test_results' => [
                'nullable',
                'string'
            ],
            'progress' => [
                'nullable',
                'string'
            ],
            'notes' => [
                'nullable',
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
