<?php

declare(strict_types=1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientDto;
use App\DataTransferObjects\PatientManagement\PatientUpdateDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PatientHistory;
use App\Models\PatientManagement\PatientMedicalTest;
use App\Models\PatientManagement\PhysicalExamination;
use App\Models\PatientManagement\TreatmentPlan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Enums\PatientStatus;
use App\Models\PatientManagement\Insurance;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class PatientService
{
    public function index($request): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->first()->id;
        $searchParam = $request->input('search');

        $patients = Patient::query()
            ->with([
                'appointments' => function ($query) {
                    $query->select('id', 'patient_id', 'created_at');
                    $query->whereDate('created_at', '=', now()->toDateString())->orderBy('created_at', 'asc')->take(1);
                },
                'patientVisits' => function ($query) {
                    $query->select('id', 'patient_id', 'created_at');
                    $query->latest()->take(1);
                },
            ])
            ->select([
                'id',
                'first_name',
                'last_name',
                'religion',
                'date_of_birth',
                'address',
                'identity_code',
                'phone_number',
                'email',
                'occupation',
                'legal_representative_first_name',
                'legal_representative_last_name',
                'legal_representative_relationship',
                'legal_representative_phone_number',
                'marital_status',
                'status',
            ])
            ->where('doctor_id', $doctorId)
            ->search($searchParam)
            ->paginate(5);

        return [
            'meta' => [
                'current_page' => $patients->currentPage(),
                'first_page_url' => $patients->url(1),
                'from' => $patients->firstItem(),
                'last_page' => $patients->lastPage(),
                'last_page_url' => $patients->url($patients->lastPage()),
                'links' => $patients->linkCollection(),
                'next_page_url' => $patients->nextPageUrl(),
                'path' => $patients->path(),
                'per_page' => $patients->perPage(),
                'prev_page_url' => $patients->previousPageUrl(),
                'to' => $patients->lastItem(),
                'total' => $patients->total(),
            ],
            'patient_data' => $patients->items(),
        ];
    }

    public function show($patient): array
    {
        return [
            'general_info' => $this->generalInfo($patient),
            'laboratory_tests' => $this->laboratoryTests($patient),
            'disease_history' => $this->diseaseHistory($patient),
            'treatment_plan' => $this->treatmentPlan($patient),
            'appointment_list' => $this->appointmentList($patient),
        ];
    }

    private function generalInfo($patient): array
    {
        $physicalExamination = PhysicalExamination::where('patient_id', $patient->id)->first();

        return [
            'full_name' => $patient->first_name . ' ' . $patient->last_name,
            'first_name' => $patient->first_name,
            'last_name' => $patient->last_name,
            'religion' => $patient->religion,
            'date_of_birth' => $patient->date_of_birth,
            'address' => $patient->address,
            'identity_code' => $patient->identity_code,
            'phone_number' => $patient->phone_number,
            'email' => $patient->email,
            'occupation' => $patient->occupation,
            'legal_representative_first_name' => $patient->legal_representative_first_name,
            'legal_representative_last_name' => $patient->legal_representative_last_name,
            'legal_representative_relationship' => $patient->legal_representative_relationship,
            'legal_representative_phone_number' => $patient->legal_representative_phone_number,
            'marital_status' => $patient->marital_status,
            'status' => $patient->status,
            'height' => $physicalExamination ? $physicalExamination->height : null,
            'weight' => $physicalExamination ? $physicalExamination->weight : null,
            'blood_pressure' => $physicalExamination ? $physicalExamination->blood_pressure : null,
            'heart_rate' => $physicalExamination ? $physicalExamination->heart_rate : null,
        ];
    }

    private function laboratoryTests($patient): ?Collection
    {
        return PatientMedicalTest::where('patient_id', $patient->id)
            ->select([
                'id',
                'date_of_medical_analysis',
                'title',
                'file_path',
            ])
            ->latest()
            ->take(4)
            ->get()
            ->map(function ($test) {
                return [
                    'id' => $test->id,
                    'date_of_medical_analysis' => Carbon::parse($test->date_of_medical_analysis)->format('d-m-Y'),
                    'title' => Str::limit($test->title, 10),
                    'file_path' => $test->file_path,
                ];
            });
    }

    private function diseaseHistory($patient): ?PatientHistory
    {
        return PatientHistory::where('patient_id', $patient->id)
            ->select([
                'date_of_onset',
                'diagnosis',
                'test_results',
                'symptoms',
            ])->first();
    }

    private function treatmentPlan($patient): ?LengthAwarePaginator
    {
        return TreatmentPlan::where('patient_id', $patient->id)->select([
            'medicament_name',
            'medication_dosage',
            'medication_frequency',
            'medication_timing',
        ])->paginate(4);
    }

    private function appointmentList($patient): ?LengthAwarePaginator
    {
        $doctorId = Doctor::where('user_id', Auth::id())->first()->id;
        return Appointment::where('patient_id', $patient->id)->where('doctor_id', $doctorId)
            ->select(['id', 'appointment_datetime', 'type', DB::raw('SUBSTRING(reason, 1, 20) as reason')])
            ->paginate(3);
    }

    public function store(PatientDto $dto): Patient
    {
        $insuranceId = Insurance::inRandomOrder()->first()->id;

        return Patient::create([
            'first_name' => $dto->first_name,
            'last_name' => $dto->last_name,
            'date_of_birth' => $dto->date_of_birth,
            'religion' => $dto->religion,
            'occupation' => $dto->occupation,
            'address' => $dto->address,
            'phone_number' => $dto->phone_number,
            'identity_code' => $dto->identity_code,
            'legal_representative_first_name' => $dto->legal_representative_first_name,
            'legal_representative_last_name' => $dto->legal_representative_last_name,
            'legal_representative_relationship' => $dto->legal_representative_relationship,
            'legal_representative_phone_number' => $dto->legal_representative_phone_number,
            'marital_status' => $dto->marital_status,
            'status' => PatientStatus::ACTIVE,
            'insurance_id' => $insuranceId,
            'doctor_id' => $dto->doctor_id,
        ]);
    }

    public function update(PatientUpdateDto $dto, Patient $patient): Patient
    {
        $patient->update([
            'first_name' => $dto->first_name,
            'last_name' => $dto->last_name,
            'date_of_birth' => $dto->date_of_birth,
            'religion' => $dto->religion,
            'occupation' => $dto->occupation,
            'address' => $dto->address,
            'phone_number' => $dto->phone_number,
            'legal_representative_first_name' => $dto->legal_representative_first_name,
            'legal_representative_last_name' => $dto->legal_representative_last_name,
            'legal_representative_relationship' => $dto->legal_representative_relationship,
            'legal_representative_phone_number' => $dto->legal_representative_phone_number,
            'marital_status' => $dto->marital_status,
            'status' => $dto->status,
        ]);
        return $patient;
    }

    public function destroy(Patient $patient): void
    {
        $patient->delete();
    }

    public function getBasicPatientInfo(): array
    {
        $doctor = Doctor::where('user_id', Auth::id())->first();

        return $doctor->patients()->get()->toArray();
    }

    public function patientSearch($request): Collection
    {
        $searchParam = $request->input('patient_search');
        $patients = Patient::select(['id', 'first_name', 'last_name'])->search($searchParam)->get();
        return $patients;
    }
}
