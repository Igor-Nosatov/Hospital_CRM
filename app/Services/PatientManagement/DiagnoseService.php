<?php

declare (strict_types = 1);

namespace App\Services\PatientManagement;

use App\DataTransferObjects\PatientManagement\DiagnoseDto;
use App\Models\PatientManagement\Diagnose;
use Illuminate\Database\Eloquent\Collection;
class DiagnoseService
{
    public function index():Collection
    {
        return Diagnose::get();
    }

    public function show($diagnose):Collection
    {
        return Diagnose::with(['user'])->find($diagnose);
    }

    public function store(DiagnoseDto $dto): Diagnose
    {
        return Diagnose::create($dto->toArray());
    }

    public function update(DiagnoseDto $dto, Diagnose $diagnose): Diagnose
    {
        $diagnose->update($dto->toArray());
        return $diagnose;
    }

    public function destroy(Diagnose $Diagnose): void
    {
        $Diagnose->delete();
    }
}
