<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\TreatmentPlanDto;
use App\Models\PatientManagement\TreatmentPlan;

class TreatmentPlanService
{
    public function show(int $patientId): array
    {
        $paginatedData = TreatmentPlan::select([
            'id',
            'medicament_name',
            'medication_dosage',
            'medication_frequency',
            'medication_timing',
            'patient_id',
        ])
            ->where('patient_id', $patientId)
            ->paginate(4);

        $treatmentPlanData = $paginatedData->items();
        $meta = [
            'current_page' => $paginatedData->currentPage(),
            'last_page' => $paginatedData->lastPage(),
            'per_page' => $paginatedData->perPage(),
            'total' => $paginatedData->total(),
        ];

        return [
            'treatmentPlanData' => $treatmentPlanData,
            'meta' => $meta,
        ];
    }

    public function store(TreatmentPlanDto $dto): TreatmentPlan
    {
        return TreatmentPlan::create((array) $dto);
    }

    public function destroy(TreatmentPlan $treatmentPlan): void
    {
        $treatmentPlan->delete();
    }
}
