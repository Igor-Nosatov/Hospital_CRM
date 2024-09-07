<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\DiseaseHistoryDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\DiseaseHistoryRequest;
use App\Services\PatientManagement\DiseaseHistoryService;
use Illuminate\Http\JsonResponse;

final class DiseaseHistoryController extends ApiController
{
    public function __construct(
        private DiseaseHistoryService $diseaseHistoryService
    ) {}

    public function show(int $patientId): JsonResponse
    {
        $data = $this->diseaseHistoryService->show($patientId);
        return $this->sendSuccessResponse($data);
    }

    public function getLatestDiseaseHistory(int $patientId): JsonResponse
    {
        $data = $this->diseaseHistoryService->getLatestDiseaseHistory($patientId);
        return $this->sendSuccessResponse($data);
    }

    public function store(DiseaseHistoryRequest $request): JsonResponse
    {
        $data = $this->diseaseHistoryService->store(
            DiseaseHistoryDto::fromPatientHistoryRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

}
