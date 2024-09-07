<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Patient;

use App\Enums\MaritalStatus;
use App\Traits\ValidationExceptionTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PatientRequest extends FormRequest
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
            'first_name' => [
                'required',
                'string',
                'max:255'
            ],
            'last_name' => [
                'required',
                'string',
                'max:255'
            ],
            'date_of_birth' => [
                'required',
                'date'
            ],
            'religion' => [
                'required',
                'string',
                'max:255'
            ],
            'occupation' => [
                'required',
                'string',
                'max:255'
            ],
            'address' => [
                'required',
                'string',
                'max:255'
            ],
            'phone_number' => [
                'nullable',
                'string',
                'unique:patients,phone_number'
            ],
            'email' => [
                'nullable',
                'string',
                'unique:patients,email'
            ],
            'identity_code' => [
                'required',
                'string',
                'unique:patients,identity_code'
            ],
            'legal_representative_first_name' => [
                'required',
                'string',
                'max:255'
            ],
            'legal_representative_last_name' => [
                'required',
                'string',
                'max:255'
            ],
            'legal_representative_relationship' => [
                'required',
                'string',
                'max:255'
            ],
            'legal_representative_phone_number' => [
                'required',
                'string',
                'max:20'
            ],
            'marital_status' => [
                'required',
                'string',
                Rule::in(MaritalStatus::all())
            ],
            'doctor_id' => [
                'nullable',
                'exists:doctors,id'
            ],
        ];
    }
}
