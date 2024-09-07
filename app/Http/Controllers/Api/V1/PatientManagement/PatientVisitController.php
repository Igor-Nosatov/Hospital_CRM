<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientVisitDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\PatientVisit\PatientVisitRequest;
use App\Models\PatientManagement\PatientVisit;
use App\Services\PatientManagement\PatientVisitService;
use Illuminate\Http\JsonResponse;

final class PatientVisitController extends ApiController
{
    public function __construct(
        private PatientVisitService $patientVisitService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->patientVisitService->index();
        return $this->sendSuccessResponse($data);
    }

    public function store(PatientVisitRequest $request): JsonResponse
    {
        $data = $this->patientVisitService->store(
            PatientVisitDto::fromPatientVisitRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function update(PatientVisitRequest $request, PatientVisit $PatientVisit): JsonResponse
    {
        $data = $this->patientVisitService->update(
            PatientVisitDto::fromPatientVisitRequest($request),
            $PatientVisit,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(PatientVisit $PatientVisit): JsonResponse
    {
        $this->patientVisitService->destroy($PatientVisit);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
