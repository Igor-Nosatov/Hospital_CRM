<?php

declare(strict_types=1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\PhysicalExaminationDto;
use App\Models\PatientManagement\PhysicalExamination;

class PhysicalExaminationService
{
    public function show($id): array
    {
        $physicalExamination = PhysicalExamination::query()
            ->where('patient_id', $id)
            ->first();

        return [
            'height' => $physicalExamination->height,
            'weight' => $physicalExamination->weight,
            'heart_rate' => $physicalExamination->heart_rate,
            'blood_pressure' => $physicalExamination->blood_pressure,
            'patient_id' => $physicalExamination->patient_id,
        ];
    }

    public function store(PhysicalExaminationDto $dto)
    {
        $recordPhysicalExamination = PhysicalExamination::where('patient_id', $dto->patient_id)->first();

        if ($recordPhysicalExamination !== null) {
            $updateData = [];
            foreach (((array) $dto) as $field => $value) {
                if ($field !== 'patient_id' && $value !== null) {
                    $updateData[$field] = $value;
                }
            }

            if (!empty($updateData)) {
                $recordPhysicalExamination->update($updateData);
            }

            return $recordPhysicalExamination->fresh();
        } else {
            $recordPhysicalExamination = PhysicalExamination::create((array) $dto);

            return $recordPhysicalExamination;
        }
    }

}
