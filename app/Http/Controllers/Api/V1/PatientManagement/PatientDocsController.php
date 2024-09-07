<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\PatientDocDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\PatientDoc\PatientDocRequest;
use App\Services\PatientManagement\PatientDocsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class PatientDocsController extends ApiController
{
    public function __construct(
        private PatientDocsService $patientDocsService
    ) {
    }

    public function index(Request $request): JsonResponse
    {
        $data = $this->patientDocsService->index($request);

        return $this->sendSuccessResponse($data);
    }

    public function store(PatientDocRequest $request): JsonResponse
    {
        $data = $this->patientDocsService->store(
            PatientDocDto::fromPatientDocRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }
}
