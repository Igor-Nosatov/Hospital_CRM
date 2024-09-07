<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use App\Http\Resources\Api\V1\MedicalStaff\Doctor\DoctorResource;
use App\Services\MedicalStaff\AnalyticsService;

final class AnalyticsController extends ApiController
{
    public function __construct(
        private AnalyticsService $analyticsService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->analyticsService->index();
        return $this->sendSuccessResponse($data);
    }
}

