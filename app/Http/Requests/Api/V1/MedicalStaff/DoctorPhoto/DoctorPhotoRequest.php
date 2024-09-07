<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff\DoctorPhoto;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class DoctorPhotoRequest extends FormRequest
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
            'name' => [
                'required',
                'string',
                'max:255'
            ],
            'file_name' => [
                'required',
                'string',
                'max:255'
            ],
            'mime_type' => [
                'required',
                'string',
                'max:255'
            ],
            'path' => [
                'required',
                'string',
                'max:255'
            ],
            'disk' => [
                'required',
                'string',
                'max:255'
            ],
            'file_hash' => [
                'required',
                'string',
                'max:64',
                'unique:doctor_photos,file_hash'
            ],
            'collection' => [
                'nullable',
                'string',
                'max:255'
            ],
            'size' => [
                'required',
                'integer'
            ],
            'photo' => [
                'required',
                'file',
                'mimes:jpeg,png,jpg,gif',
                'max:2048'
            ],
            'doctor_id' => [
                'required',
                'integer',
                'exists:doctors,id'
            ],
        ];
    }
}
