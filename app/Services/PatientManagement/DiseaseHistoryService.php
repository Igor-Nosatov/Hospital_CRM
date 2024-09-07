<?php

declare(strict_types=1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\DiseaseHistoryDto;
use App\Models\PatientManagement\PatientHistory;

class DiseaseHistoryService
{
    public function show(int $patientId): array
    {
        $paginatedData = PatientHistory::select([
            'id',
            'date_of_onset',
            'diagnosis',
            'symptoms',
            'treatment',
            'previous_interventions',
            'test_results',
            'progress',
            'notes',
        ])
            ->where('patient_id', $patientId)
            ->paginate(1);

        $patientHistoryData = $paginatedData->items();
        $meta = [
            'current_page' => $paginatedData->currentPage(),
            'last_page' => $paginatedData->lastPage(),
            'per_page' => $paginatedData->perPage(),
            'total' => $paginatedData->total(),
        ];

        return [
            'patientHistoryData' => $patientHistoryData,
            'meta' => $meta,
        ];
    }

    public function getLatestDiseaseHistory(int $patientId): PatientHistory
    {
        return PatientHistory::select([
            'id',
            'date_of_onset',
            'diagnosis',
            'test_results',
            'symptoms',
        ])
            ->where('patient_id', $patientId)
            ->latest()
            ->first();
    }

    public function store(DiseaseHistoryDto $dto): PatientHistory
    {
        return PatientHistory::create($dto->toArray());
    }

}
