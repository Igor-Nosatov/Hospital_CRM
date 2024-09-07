<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class UpdateSettingRequest extends FormRequest
{
    use ValidationExceptionTrait;

    public function authorize()
    {
        return true; // Adjust authorization logic as needed
    }

    public function rules()
    {
        return [
            'setting_status' => ['required','string'],
        ];
    }
}
