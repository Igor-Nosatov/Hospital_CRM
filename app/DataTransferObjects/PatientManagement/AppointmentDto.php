<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Appointment\AppointmentRequest;
use App\Http\Requests\Api\V1\PatientManagement\Appointment\UpdateAppointmentRequest;

class AppointmentDto
{
    public function __construct(
        public ?string $appointment_datetime = null,
        public ?string $reason = null,
        public ?string $symptoms = null,
        public ?string $notes = null,
        public ?string $status = null,
        public ?string $type = null,
        public ?string $reminder_datetime = null,
        public ?int $patient_id = null,
        public ?int $doctor_id = null,
        public ?int $medical_service_id= null,
    ) {}

    public static function fromAppointmentRequest(AppointmentRequest $request): AppointmentDto
    {
        return new self(
            appointment_datetime: $request->validated('appointment_datetime'),
            reason: $request->validated('reason'),
            symptoms: $request->validated('symptoms'),
            notes: $request->validated('notes'),
            status: $request->validated('status'),
            type: $request->validated('type'),
            reminder_datetime: $request->validated('reminder_datetime'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id'),
            medical_service_id: $request->validated('medical_service_id'),
        );
    }

    public static function fromUpdateAppointmentRequest(UpdateAppointmentRequest $request): AppointmentDto
    {
        return new self(
            reason: $request->validated('reason'),
            symptoms: $request->validated('symptoms'),
            notes: $request->validated('notes'),
            status: $request->validated('status'),
            type: $request->validated('type'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
