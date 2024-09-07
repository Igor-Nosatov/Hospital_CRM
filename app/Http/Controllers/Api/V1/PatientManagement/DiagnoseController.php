<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\DiagnoseDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Diagnose\DiagnoseRequest;
use App\Http\Resources\Api\V1\PatientManagement\DiagnoseResource;
use App\Models\PatientManagement\Diagnose;
use App\Services\PatientManagement\DiagnoseService;
use Illuminate\Http\JsonResponse;

final class DiagnoseController extends ApiController
{
    public function __construct(
        private DiagnoseService $diagnoseService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->diagnoseService->index();
        return $this->sendSuccessResponse(DiagnoseResource::collection($data));
    }

    public function store(DiagnoseRequest $request): JsonResponse
    {
        $data = $this->diagnoseService->store(
            DiagnoseDto::fromDiagnoseRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Diagnose $Diagnose): JsonResponse
    {
        $this->diagnoseService->destroy($Diagnose);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
