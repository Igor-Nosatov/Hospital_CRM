<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff\Doctor;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Traits\ValidationExceptionTrait;

class UpdateDoctorRequest extends FormRequest
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
                'nullable',
                'string',
                'max:255'
            ],
            'address' => [
                'required',
                'string'
            ],
            'phone_number' => [
                'nullable',
                'string',
                'max:20'
            ],
            'email' => [
                'required',
                'email',
                'max:255'
            ],
            'biography' => [
                'nullable',
                'string'
            ],
            'education' => [
                'nullable',
                'array'
            ],
            'experience' => [
                'nullable',
                'array'
            ],
            'languages' => [
                'nullable',
                'array'
            ],
            'current_location' => [
                'nullable',
                'array'
            ],
            'certifications' => [
                'nullable',
                'array'
            ],
            'medical_license' => [
                'nullable',
                'array'
            ],
            'professional_memberships' => [
                'nullable',
                'array'
            ],
            'awards' => [
                'nullable',
                'array'
            ],
            'publications' => [
                'nullable',
                'array'
            ],
            'research_interests' => [
                'nullable',
                'array'
            ],
        ];
    }
}
