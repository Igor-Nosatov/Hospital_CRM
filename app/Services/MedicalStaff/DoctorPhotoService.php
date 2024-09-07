<?php

declare (strict_types = 1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\DoctorPhotoDto;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorPhoto;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class DoctorPhotoService
{
    public function show($doctor): Collection
    {
        $doctor = Doctor::where('id', $doctor->id)->where('user_id', Auth::id())->first();
        return DoctorPhoto::where('doctor_id', $doctor->id)->first();
    }

    public function store(DoctorPhotoDto $dto): DoctorPhoto
    {
        return DoctorPhoto::create((array) $dto);
    }

    public function destroy(DoctorPhoto $doctorPhoto): void
    {
        $doctor = Doctor::where('user_id', Auth::id())->first();
        $doctorPhoto->where('id', $doctorPhoto->id)->where('doctor_id', $doctor->id)->delete();
    }
}
