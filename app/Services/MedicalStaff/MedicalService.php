<?php

declare (strict_types = 1);

namespace App\Services\MedicalStaff;

use App\Models\MedicalStaff\MedicalService as MedicalStaffMedicalService;

class MedicalService
{
    public function index(): array
    {
        $medicalServices = MedicalStaffMedicalService::get(['id','name','price']);
        return $medicalServices->toArray();
    }
}
