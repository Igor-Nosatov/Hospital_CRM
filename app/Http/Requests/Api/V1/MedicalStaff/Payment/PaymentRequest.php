<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff\Payment;

use App\Enums\CurrencyType;
use App\Enums\PaymentStatus;
use App\Traits\ValidationExceptionTrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PaymentRequest extends FormRequest
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
            'amount' => [
                'required',
                'integer'
            ],
            'payment_date' => [
                'required',
                'date'
            ],
            'payment_status' => [
                'required',
                Rule::in(PaymentStatus::all())
            ],
            'payment_method' => [
                'required',
                'string'
            ],
            'transaction_id' => [
                'nullable',
                'string'
            ],
            'card_expiry_date' => [
                'nullable',
                'string'
            ],
            'comments' => [
                'nullable',
                'string'
            ],
            'currency' => [
                'required',
                Rule::in(CurrencyType::all())
            ],
            'patient_id' => [
                'required',
                'exists:patients,id'
            ],
            'doctor_id' => [
                'required',
                'exists:users,id'
            ],
        ];
    }
}
