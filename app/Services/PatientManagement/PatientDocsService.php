<?php

declare(strict_types=1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientDocDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\PatientDoc;
use Illuminate\Support\Facades\Auth;

class PatientDocsService
{
    public function index($request): array
    {
        $searchParam = $request->input('search');

        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $patientDocs = PatientDoc::where('doctor_id', $doctorId)
            ->with('patient:id,first_name,last_name,date_of_birth,phone_number,email,created_at')
            ->select('id', 'title', 'document_type', 'patient_id')
            ->search($searchParam)
            ->paginate(5);

        $meta = [
            'current_page' => $patientDocs->currentPage(),
            'first_page_url' => $patientDocs->url(1),
            'from' => $patientDocs->firstItem(),
            'last_page' => $patientDocs->lastPage(),
            'last_page_url' => $patientDocs->url($patientDocs->lastPage()),
            'next_page_url' => $patientDocs->nextPageUrl(),
            'path' => $patientDocs->url($patientDocs->currentPage()),
            'per_page' => $patientDocs->perPage(),
            'prev_page_url' => $patientDocs->previousPageUrl(),
            'to' => $patientDocs->lastItem(),
            'total' => $patientDocs->total(),
        ];

        $patientDocsData = collect($patientDocs->items())->map(function ($patientDoc) {
            $patient = $patientDoc->patient;
            return [
                'id' => $patientDoc->id,
                'title' => substr($patientDoc->title, 0, 20),
                'document_type' => $patientDoc->document_type,
                'patient_id' => $patientDoc->patient_id,
                'patient_full_name' => $patient->first_name . ' ' . $patient->last_name,
                'date_of_birth' => $patient->date_of_birth->format('d-m-Y'),
                'phone_number' => $patient->phone_number,
                'email' => $patient->email,
                'created_at' => $patient->created_at->format('d-m-Y'),
            ];
        });

        return [
            'meta' => $meta,
            'patient_docs' => $patientDocsData,
        ];
    }

    /**
     * Store a new PatientDoc.
     *
     * @param PatientDocDto $patientDocDto
     * @return PatientDoc
     */
    public function store(PatientDocDto $dto): PatientDoc
    {
        $file = $dto->file;
        $title = $dto->title;
        $doctorId = $dto->doctor_id;
        $patientId = $dto->patient_id;

        $fileHash = hash('sha256', $title . now());

        $filePath = $file->store('medicalDocs', 'public');

        $patientDoc = new PatientDoc();
        $patientDoc->title = $title;
        $patientDoc->document_name = $dto->document_name;
        $patientDoc->document_type = $dto->document_type;
        $patientDoc->path = $filePath;
        $patientDoc->mime_type = $file->getClientMimeType();
        $patientDoc->file_hash = $fileHash;
        $patientDoc->size = (int) $file->getSize();
        $patientDoc->doctor_id = (int) $doctorId;
        $patientDoc->patient_id = (int) $patientId;
        $patientDoc->save();

        return $patientDoc;
    }
}

