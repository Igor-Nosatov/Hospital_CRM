<?php

declare (strict_types = 1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\LabTestDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Patient\LabTestRequest;
use App\Models\PatientManagement\PatientMedicalTest;
use App\Services\PatientManagement\LabTestService;
use Illuminate\Http\JsonResponse;

final class LabTestController extends ApiController
{
    public function __construct(
        private LabTestService $labTestService
    ) {}

    public function show(int $patientId): JsonResponse
    {
        $data = $this->labTestService->show($patientId);
        return $this->sendSuccessResponse($data);
    }

    public function store(LabTestRequest $request): JsonResponse
    {
        $data = $this->labTestService->store(
            LabTestDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(PatientMedicalTest $patientMedicalTest): JsonResponse
    {
        $this->labTestService->destroy($patientMedicalTest);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
