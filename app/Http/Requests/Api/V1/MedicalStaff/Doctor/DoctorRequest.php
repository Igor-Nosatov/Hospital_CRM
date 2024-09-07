<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff\Doctor;

use App\Enums\DoctorStatus;
use App\Enums\MaritalStatus;
use App\Enums\WorkingMode;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Traits\ValidationExceptionTrait;

class DoctorRequest extends FormRequest
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
     * @return array<string, array<string>|string|Rule>
     */
    public function rules(): array
    {
        return [
            'working_mode' => [
                'required',
                Rule::in(WorkingMode::all())
            ],
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
            'address' => [
                'required',
                'string'
            ],
            'phone_number' => [
                'nullable',
                'regex:/^([0-9\s\-\+\(\)]*)$/',
                'min:10'
            ],
            'home_number' => [
                'nullable',
                'regex:/^([0-9\s\-\+\(\)]*)$/',
                'min:10'
            ],
            'other_phone_number' => [
                'nullable',
                'regex:/^([0-9\s\-\+\(\)]*)$/',
                'min:10'
            ],
            'marital_status' => [
                'required',
                Rule::in(MaritalStatus::all())
            ],
            'status' => [
                'required',
                Rule::in(DoctorStatus::all())
            ],
            'speciality_id' => [
                'required'
            ],
            'department_id' => [
                'required'
            ],
            'country_id' => [
                'required'
            ],
            'user_id' => [
                'required'
            ],
        ];
    }
}
