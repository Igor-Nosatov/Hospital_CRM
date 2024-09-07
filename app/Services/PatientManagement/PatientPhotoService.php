<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientPhotoDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\PatientPhoto;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class PatientPhotoService
{
    public function show($patient): Collection
    {
        $doctor = Doctor::where('user_id', Auth::id())->first();
        return PatientPhoto::where('id', $patient->id)->where('doctor_id', $doctor->id)->first();
    }

    public function store(PatientPhotoDto $dto): PatientPhoto
    {
        return PatientPhoto::create((array) $dto);
    }

    public function destroy(PatientPhoto $patientPhoto): void
    {
        $doctor = Doctor::where('user_id', Auth::id())->first();
        $patientPhoto->where('doctor_id', $doctor->id)->delete();
    }
}
