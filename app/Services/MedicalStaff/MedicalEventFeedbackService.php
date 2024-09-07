<?php

declare(strict_types=1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\MedicalEventFeedbackDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\MedicalEventFeedback;
use Illuminate\Support\Facades\Auth;

class MedicalEventFeedbackService
{
    public function store(MedicalEventFeedbackDto $dto): MedicalEventFeedback
    {
        $doctor = Doctor::where('user_id', Auth::id())->first();

        $medicalEventFeedback = MedicalEventFeedback::create([
            'overall_quality' => $dto->overall_quality,
            'meet_expectations' => $dto->meet_expectations,
            'useful_topics' => $dto->useful_topics,
            'material_quality' => $dto->material_quality,
            'schedule_convenience' => $dto->schedule_convenience,
            'organization_quality' => $dto->organization_quality,
            'fav_sessions' => $dto->fav_sessions,
            'speaker_competence' => $dto->speaker_competence,
            'disappointed_sessions' => $dto->disappointed_sessions,
            'medical_event_id' => $dto->medical_event_id,
            'doctor_id' => $doctor->id,
        ]);

        return $medicalEventFeedback;
    }
}
