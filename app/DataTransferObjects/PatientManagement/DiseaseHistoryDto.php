<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\DiseaseHistoryRequest;

class DiseaseHistoryDto
{
    public function __construct(
        public string $date_of_onset,
        public string $diagnosis,
        public string $symptoms,
        public ?string $treatment,
        public ?string $previous_interventions,
        public ?string $test_results,
        public ?string $progress,
        public ?string $notes,
        public int $patient_id
    ) {
    }

    public static function fromPatientHistoryRequest(DiseaseHistoryRequest $request): DiseaseHistoryDto
    {
        return new self(
            date_of_onset: $request->validated('date_of_onset'),
            diagnosis: $request->validated('diagnosis'),
            symptoms: $request->validated('symptoms'),
            treatment: $request->validated('treatment'),
            previous_interventions: $request->validated('previous_interventions'),
            test_results: $request->validated('test_results'),
            progress: $request->validated('progress'),
            notes: $request->validated('notes'),
            patient_id: $request->validated('patient_id')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
