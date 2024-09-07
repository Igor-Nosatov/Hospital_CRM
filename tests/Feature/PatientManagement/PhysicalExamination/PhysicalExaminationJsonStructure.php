<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\PhysicalExamination;

trait PhysicalExaminationJsonStructure
{
    /**
     * Get the JSON structure for a GET request to fetch physical examination data.
     *
     * @return array
     */
    protected function getGetPhysicalExaminationJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'height',
                'weight',
                'heart_rate',
                'blood_pressure',
                'patient_id',
            ],
        ];
    }

    /**
     * Get the JSON structure for a POST request to store physical examination data.
     *
     * @return array
     */
    protected function getStorePhysicalExaminationJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'height',
                'weight',
                'heart_rate',
                'blood_pressure',
                'patient_id',
                'deleted_at',
                'created_at',
                'updated_at',
            ],
        ];
    }
}
