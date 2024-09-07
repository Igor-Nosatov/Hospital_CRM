<?php

declare (strict_types = 1);

namespace App\DataTransferObjects\MedicalStaff;

use App\Http\Requests\Api\V1\MedicalStaff\MedicalEventFeedbackRequest;

class MedicalEventFeedbackDto
{
    public function __construct(
        public int $overall_quality,
        public int $meet_expectations,
        public ?string $useful_topics,
        public int $material_quality,
        public bool $schedule_convenience,
        public int $organization_quality,
        public ?string $fav_sessions,
        public int $speaker_competence,
        public ?string $disappointed_sessions,
        public int $medical_event_id,
        public int $doctor_id
    ) {}

    public static function fromRequest(MedicalEventFeedbackRequest $request): MedicalEventFeedbackDto
    {
        return new self(
            overall_quality: $request->validated('overall_quality'),
            meet_expectations: $request->validated('meet_expectations'),
            useful_topics: $request->validated('useful_topics'),
            material_quality: $request->validated('material_quality'),
            schedule_convenience: (bool) $request->validated('schedule_convenience'),
            organization_quality: $request->validated('organization_quality'),
            fav_sessions: $request->validated('fav_sessions'),
            speaker_competence: $request->validated('speaker_competence'),
            disappointed_sessions: $request->validated('disappointed_sessions'),
            medical_event_id: $request->validated('medical_event_id'),
            doctor_id: $request->validated('doctor_id'),
        );
    }
}
