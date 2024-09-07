<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Patient;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class PatientUpdateRequest extends FormRequest
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
                'nullable',
                'string',
                'max:255'
            ],
            'last_name' => [
                'nullable',
                'string',
                'max:255'
            ],
            'date_of_birth' => [
                'nullable',
                'date'
            ],
            'religion' => [
                'nullable',
                'string',
                'max:255'
            ],
            'occupation' => [
                'nullable',
                'string',
                'max:255'
            ],
            'address' => [
                'nullable',
                'string',
                'max:255'
            ],
            'phone_number' => [
                'nullable',
                'string',
                'max:20'
            ],
            'legal_representative_first_name' => [
                'nullable',
                'string',
                'max:255'
            ],
            'legal_representative_last_name' => [
                'nullable',
                'string',
                'max:255'
            ],
            'legal_representative_relationship' => [
                'nullable',
                'string',
                'max:255'
            ],
            'legal_representative_phone_number' => [
                'nullable',
                'string',
                'max:20'
            ],
            'marital_status' => [
                'nullable',
                'string'
            ],
            'status' => [
                'nullable',
                'string'
            ],
        ];
    }
}
