<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Meeting\MeetingRequest;

class MeetingDto
{
    public function __construct(
        public string $description,
        public string $result,
        public string $written_entities,
        public string $date,
        public int $appointment_id,
        public int $patient_id,
        public int $doctor_id
    ) {}

    public static function fromMeetingRequest(MeetingRequest $request): MeetingDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['description'],
            $validatedData['result'],
            $validatedData['written_entities'],
            $validatedData['date'],
            $validatedData['appointment_id'],
            $validatedData['patient_id'],
            $validatedData['doctor_id'],
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
