<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Dashboard;

use App\Http\Controllers\ApiController;
use App\Services\Dashboard\DashboardService;
use Illuminate\Http\JsonResponse;

final class DashboardController extends ApiController
{
    public function __construct(
        private DashboardService $dashboardService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->dashboardService->index();
        return $this->sendSuccessResponse($data);
    }
}
