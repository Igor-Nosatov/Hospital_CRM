<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\Documents\SickList;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class SickListRequest extends FormRequest
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
            'description' => [
                'required',
                'string'
            ],
            'valid_until_date' => [
                'required',
                'date'
            ],
            'patient_id' => [
                'required',
                'exists:patients,id'
            ],
            'doctor_id' => [
                'required',
                'exists:doctors,id'
            ],
            'diagnose_id' => [
                'nullable',
                'exists:diagnoses,id'
            ],
            'receipt_id' => [
                'nullable',
                'exists:receipts,id'
            ],
        ];
    }
}
