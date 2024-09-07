<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\PatientVisit;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class PatientVisitRequest extends FormRequest
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
            'visit_date' => [
                'required',
                'date'
            ],
            'complaints' => [
                'required',
                'array'
            ],
            'symptoms' => [
                'required',
                'array'
            ],
            'treatment' => [
                'required',
                'array'
            ],
            'notes' => [
                'nullable',
                'array'
            ],
            'diagnose_id' => [
                'required',
                'integer',
                'exists:diagnoses,id'
            ],
            'payment_id' => [
                'required',
                'integer',
                'exists:payments,id'
            ],
            'patient_id' => [
                'required',
                'integer',
                'exists:patients,id'
            ],
            'doctor_id' => [
                'required',
                'integer',
                'exists:doctors,id'
            ],
            'insurance_id' => [
                'required',
                'integer',
                'exists:insurances,id'
            ],
        ];
    }
}
