<?php

declare (strict_types = 1);

namespace App\Http\Requests\Api\V1\Auth\Permission;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class PermissionRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
        ];
    }
}
