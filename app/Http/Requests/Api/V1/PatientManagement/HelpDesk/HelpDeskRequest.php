<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\HelpDesk;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class HelpDeskRequest extends FormRequest
{
    use ValidationExceptionTrait;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, string|array<string>>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'required',
                'string',
                'max:255'
            ],
            'description' => [
                'required',
                'string'
            ],
            'doctor_id' => [
                'required',
                'integer',
                'exists:doctors,id'
            ],
        ];
    }
}
