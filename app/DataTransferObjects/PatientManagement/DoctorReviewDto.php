<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\DoctorReview\DoctorReviewRequest;

class DoctorReviewDto
{
    public function __construct(
        public string $title,
        public string $description,
        public int $rank,
        public int $patient_id,
        public int $doctor_id
    ) {
    }

    public static function fromDoctorReviewRequest(DoctorReviewRequest $request): DoctorReviewDto
    {
        return new self(
            title: $request->validated('title'),
            description: $request->validated('description'),
            rank: $request->validated('rank'),
            patient_id: $request->validated('patient_id'),
            doctor_id: $request->validated('doctor_id'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
