<?php

declare(strict_types=1);

namespace App\Http\Requests\Api\V1\MedicalStaff;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\ValidationExceptionTrait;

class MedicalEventFeedbackRequest extends FormRequest
{
    use ValidationExceptionTrait;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        // Assuming all users can create feedback. Adjust as necessary.
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
            'overall_quality' => [
                'required',
                'integer',
                'between:1,5'
            ],
            'meet_expectations' => [
                'required',
                'integer',
                'between:1,5'
            ],
            'useful_topics' => [
                'nullable',
                'string'
            ],
            'material_quality' => [
                'required',
                'integer',
                'between:1,5'
            ],
            'schedule_convenience' => [
                'required',
                'boolean'
            ],
            'organization_quality' => [
                'required',
                'integer',
                'between:1,5'
            ],
            'fav_sessions' => [
                'nullable',
                'string'
            ],
            'speaker_competence' => [
                'required',
                'integer',
                'between:1,5'
            ],
            'disappointed_sessions' => [
                'nullable',
                'string'
            ],
            'medical_event_id' => [
                'required',
                'integer',
                'exists:medical_events,id'
            ],
            'doctor_id' => [
                'required',
                'integer',
                'exists:doctors,id'
            ],
        ];
    }
}
