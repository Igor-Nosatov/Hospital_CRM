<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\Http\Controllers\ApiController;
use App\Services\MedicalStaff\SalaryService;
use Illuminate\Http\JsonResponse;

final class SalaryReportController extends ApiController
{
    public function __construct(
        private  SalaryService $salaryService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->salaryService->index();
        return $this->sendSuccessResponse($data);
    }
}
