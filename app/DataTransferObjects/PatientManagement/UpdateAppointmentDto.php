<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Appointment\UpdateAppointmentRequest;

class UpdateAppointmentDto
{
    public function __construct(
        public ?string $reason,
        public ?string $symptoms,
        public ?string $notes,
        public string $status,
        public string $type,
        public int $patient_id,
        public int $doctor_id,
        public int $id,
    ) {}

    public static function fromRequest(UpdateAppointmentRequest $request, int $id): UpdateAppointmentDto
    {
        return new self(
            reason: $request->validated('reason'),
            symptoms: $request->validated('symptoms'),
            notes: $request->validated('notes'),
            status: $request->validated('status'),
            type: $request->validated('type'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id'),
            id: $id,
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}

