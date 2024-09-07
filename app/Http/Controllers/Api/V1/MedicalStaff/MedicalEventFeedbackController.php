<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\MedicalEventFeedbackDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\MedicalEventFeedbackRequest;
use App\Services\MedicalStaff\MedicalEventFeedbackService;
use Illuminate\Http\JsonResponse;

final class MedicalEventFeedbackController extends ApiController
{
    public function __construct(
        private MedicalEventFeedbackService $medicalEventFeedbackService
    ) {}

    public function store(MedicalEventFeedbackRequest $request): JsonResponse
    {
        $data = $this->medicalEventFeedbackService->store(
            MedicalEventFeedbackDto::fromRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }
}
