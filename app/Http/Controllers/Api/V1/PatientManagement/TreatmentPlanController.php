<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\TreatmentPlanDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Patient\TreatmentPlanRequest;
use Illuminate\Http\JsonResponse;
use App\Models\PatientManagement\TreatmentPlan;
use App\Services\PatientManagement\TreatmentPlanService;

final class TreatmentPlanController extends ApiController
{
    public function __construct(
        private TreatmentPlanService $treatmentPlanService
    ) {}

    public function show(int $patientId): JsonResponse
    {
        $data = $this->treatmentPlanService->show($patientId);
        return $this->sendSuccessResponse($data);
    }

    public function store(TreatmentPlanRequest $request): JsonResponse
    {
        $data = $this->treatmentPlanService->store(
            TreatmentPlanDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(TreatmentPlan $treatmentPlan): JsonResponse
    {
        $this->treatmentPlanService->destroy($treatmentPlan);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}

