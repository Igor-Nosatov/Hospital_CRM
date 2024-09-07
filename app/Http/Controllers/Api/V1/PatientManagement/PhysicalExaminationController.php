<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\PhysicalExaminationDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Patient\PhysicalExaminationRequest;
use Illuminate\Http\JsonResponse;
use App\Services\PatientManagement\PhysicalExaminationService;
use Illuminate\Http\Response;

final class PhysicalExaminationController extends ApiController
{
    public function __construct(
        private PhysicalExaminationService $physicalExaminationService
    ) {}

    public function show(int $id): JsonResponse
    {
        $data = $this->physicalExaminationService->show($id);
        if (!$data) {
            return $this->sendErrorResponse('PhysicalExamination not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }
    public function store(PhysicalExaminationRequest $request): JsonResponse
    {
        $data = $this->physicalExaminationService->store(
            PhysicalExaminationDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }
}

