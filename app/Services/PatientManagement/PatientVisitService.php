<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientVisitDto;
use App\Models\PatientManagement\PatientVisit;
use Illuminate\Database\Eloquent\Collection;
class PatientVisitService
{
    public function index():Collection
    {
        return PatientVisit::get();
    }

    public function show($patientVisit):Collection
    {
        return PatientVisit::with(['user'])->find($patientVisit);
    }

    public function store(PatientVisitDto $dto): PatientVisit
    {
        return PatientVisit::create($dto->toArray());
    }

    public function update(PatientVisitDto $dto, PatientVisit $patientVisit): PatientVisit
    {
        $patientVisit->update($dto->toArray());
        return $patientVisit;
    }

    public function destroy(PatientVisit $PatientVisit): void
    {
        $PatientVisit->delete();
    }
}
