<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\Http\Controllers\ApiController;
use App\Services\MedicalStaff\MedicalService;
use Illuminate\Http\JsonResponse;

final class MedicalServiceController extends ApiController
{
    public function __construct(
        private MedicalService $medicalService
    ) {
    }

    public function index(): JsonResponse
    {
        $data = $this->medicalService->index();

        return $this->sendSuccessResponse($data);
    }

}
