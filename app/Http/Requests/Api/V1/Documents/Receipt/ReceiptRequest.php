<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\Documents\Receipt;

use App\Enums\ReceiptStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Traits\ValidationExceptionTrait;

class ReceiptRequest extends FormRequest
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
            'name' => [
                'required',
                'string',
                'max:255'
            ],
            'valid_until_date' => [
                'required',
                'date',
                'max:255'
            ],
            'barcode' => [
                'required',
                'string',
                'max:255'
            ],
            'status' => [
                'required',
                Rule::in(ReceiptStatus::all())
            ],
            'patient_id' => [
                'required',
                'integer'
            ],
            'doctor_id' => [
                'required',
                'integer'
            ],
        ];
    }
}
