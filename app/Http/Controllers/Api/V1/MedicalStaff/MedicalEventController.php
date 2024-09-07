<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\StoreMedicalEventDTO;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\StoreMedicalEventRequest;
use App\Models\MedicalStaff\MedicalEvent;
use App\Services\MedicalStaff\MedicalEventService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

final class MedicalEventController extends ApiController
{
    public function __construct(
        private MedicalEventService $medicalEventService
    ) {
    }

    public function index(): JsonResponse
    {
        $data = $this->medicalEventService->index();

        return $this->sendSuccessResponse($data);
    }

    public function storeEventRegister(StoreMedicalEventRequest $request): JsonResponse
    {
        $data = $this->medicalEventService->storeEventRegister(
            StoreMedicalEventDTO::fromMedicalEventRequest($request),
        );

        return $this->sendSuccessResponse($data);
    }

    public function show(MedicalEvent $MedicalEvent): JsonResponse
    {
        $data = $this->medicalEventService->show($MedicalEvent);
        if (! $data) {
            return $this->sendErrorResponse('MedicalEvent not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }
}
