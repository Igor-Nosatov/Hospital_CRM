<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\LabTestDto;
use App\Models\PatientManagement\PatientMedicalTest;
use Carbon\Carbon;
use Illuminate\Support\Str;

class LabTestService
{
    public function show(int $patientId): array
    {
        $paginatedData = PatientMedicalTest::select([
            'id',
            'title',
            'date_of_medical_analysis',
            'file_path',
        ])
        ->where('patient_id', $patientId)
        ->paginate(4);

        $medicalTestData = $paginatedData->items();
        $formattedMedicalTestData = [];

        foreach ($medicalTestData as $test) {
            $formattedMedicalTestData[] = [
                'id' => $test->id,
                'title' => Str::limit($test->title, 20),
                'date_of_medical_analysis' => Carbon::parse($test->date_of_medical_analysis)->format('d-m-Y'), // Форматирование даты
                'file_path' => $test->file_path,
            ];
        }

        $meta = [
            'current_page' => $paginatedData->currentPage(),
            'last_page' => $paginatedData->lastPage(),
            'per_page' => $paginatedData->perPage(),
            'total' => $paginatedData->total(),
        ];

        return [
            'medicalTestData' => $formattedMedicalTestData,
            'meta' => $meta,
        ];
    }
    public function store(LabTestDto $dto): PatientMedicalTest
    {
        $file = $dto->file;
        $title = $dto->title;
        $dateOfMedicalAnalysis = $dto->date_of_medical_analysis;
        $doctorId = $dto->doctor_id;
        $patientId = $dto->patient_id;

        $fileHash = hash('sha256', $title . now());

        $filePath = $file->store('medicalTests', 'public');

        $medicalTest = new PatientMedicalTest();
        $medicalTest->title = $title;
        $medicalTest->date_of_medical_analysis = $dateOfMedicalAnalysis;
        $medicalTest->file_path = $filePath;
        $medicalTest->mime_type = $file->getClientMimeType();
        $medicalTest->file_hash = $fileHash;
        $medicalTest->size = (int) $file->getSize();
        $medicalTest->doctor_id = (int) $doctorId;
        $medicalTest->patient_id = (int) $patientId;
        $medicalTest->save();

        return $medicalTest;
    }
    public function destroy(PatientMedicalTest $labTest): void
    {
        $labTest->delete();
    }
}
