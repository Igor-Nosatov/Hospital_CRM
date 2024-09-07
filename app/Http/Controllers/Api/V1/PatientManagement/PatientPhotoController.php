<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientPhotoDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\PatientPhoto\PatientPhotoRequest;
use Illuminate\Http\JsonResponse;
use App\Models\PatientManagement\PatientPhoto;
use App\Services\PatientManagement\PatientPhotoService;

final class PatientPhotoController extends ApiController
{
    public function __construct(
        private PatientPhotoService $patientPhotoService
    ) {}

    public function store(PatientPhotoRequest $request): JsonResponse
    {
        $data = $this->patientPhotoService->store(
            PatientPhotoDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(PatientPhoto $patientPhoto): JsonResponse
    {
        $data = $this->patientPhotoService->show($patientPhoto);
        return $this->sendSuccessResponse($data);
    }

    public function destroy(PatientPhoto $patientPhoto): JsonResponse
    {
        $this->patientPhotoService->destroy($patientPhoto);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}

