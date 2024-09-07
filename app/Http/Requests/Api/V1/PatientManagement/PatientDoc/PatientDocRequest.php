<?php

namespace App\Http\Requests\Api\V1\PatientManagement\PatientDoc;

use App\Enums\PatientDocType;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Traits\ValidationExceptionTrait;

class PatientDocRequest extends FormRequest
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
            'title' => [
                'required',
                'string',
                'max:255'
            ],
            'document_type' => [
                'required',
                'string',
                Rule::in(PatientDocType::all())
            ],
            'document_name' => [
                'required',
                'string',
                'max:255'
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
