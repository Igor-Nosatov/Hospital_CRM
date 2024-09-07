<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientDto;
use App\DataTransferObjects\PatientManagement\PatientUpdateDto;
use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\V1\PatientManagement\Patient\PatientRequest;
use App\Http\Requests\Api\V1\PatientManagement\Patient\PatientUpdateRequest;
use App\Models\PatientManagement\Patient;
use App\Services\PatientManagement\PatientService;
use Illuminate\Http\Request;

final class PatientController extends ApiController
{
    public function __construct(
        private PatientService $patientService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $data = $this->patientService->index($request);
        return $this->sendSuccessResponse($data);
    }

    public function store(PatientRequest $request): JsonResponse
    {
        $data = $this->patientService->store(
            PatientDto::fromPatientRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Patient $patient): JsonResponse
    {
        $data = $this->patientService->show($patient);
        return $this->sendSuccessResponse($data);
    }

    public function update(PatientUpdateRequest $request, Patient $patient): JsonResponse
    {
        $data = $this->patientService->update(
            PatientUpdateDto::fromPatientRequest($request),
            $patient,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Patient $patient): JsonResponse
    {
        $this->patientService->destroy($patient);
        return $this->sendDeleteResponse('Data deleted successfully');
    }

    public function getBasicPatientInfo(): JsonResponse
    {
        $data = $this->patientService->getBasicPatientInfo();
        return $this->sendSuccessResponse($data);
    }

    public function patientSearch(Request $request): JsonResponse
    {
        $data = $this->patientService->patientSearch($request);
        return $this->sendSuccessResponse($data);
    }
}
