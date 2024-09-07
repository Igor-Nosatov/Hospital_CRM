<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\Http\Controllers\ApiController;
use Illuminate\Http\JsonResponse;
use App\Services\MedicalStaff\NotificationService;

final class NotificationController extends ApiController
{
    public function __construct(
        private NotificationService $notificationService
    ) {}
    final
    public function index(): JsonResponse
    {
        $data = $this->notificationService->index();
        return $this->sendSuccessResponse($data);
    }
}

