<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\DoctorPhotoDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\DoctorPhoto\DoctorPhotoRequest;
use Illuminate\Http\JsonResponse;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorPhoto;
use App\Services\MedicalStaff\DoctorPhotoService;

final class DoctorPhotoController extends ApiController
{
    public function __construct(
        private DoctorPhotoService $doctorPhotoService
    ) {}

    public function store(DoctorPhotoRequest $request): JsonResponse
    {
        $data = $this->doctorPhotoService->store(
            DoctorPhotoDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Doctor $doctor): JsonResponse
    {
        $data = $this->doctorPhotoService->show($doctor);
        return $this->sendSuccessResponse($data);
    }

    public function destroy(DoctorPhoto $doctorPhoto): JsonResponse
    {
        $this->doctorPhotoService->destroy($doctorPhoto);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}

