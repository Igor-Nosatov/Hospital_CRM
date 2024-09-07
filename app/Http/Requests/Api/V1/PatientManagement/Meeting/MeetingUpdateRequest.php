<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\PatientManagement\Meeting;

use App\Enums\MeetingStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Traits\ValidationExceptionTrait;

class MeetingUpdateRequest extends FormRequest
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
                'string',
                'max:255'
            ],
            'result' => [
                'required',
                'string',
                'max:255'
            ],
            'written_entities' => [
                'required',
                'string',
                'max:255'
            ],
            'date' => [
                'required',
                'date'
            ],
            'meeting_status' => [
                'required',
                'string',
                Rule::in(MeetingStatus::all())
            ],
        ];
    }
}
