<?php

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\HelpDeskDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\HelpDesk\HelpDeskRequest;
use App\Services\PatientManagement\HelpDeskService;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

final class HelpDeskController extends ApiController{
    public function __construct(
        private HelpDeskService $helpDeskService
    ) {}

    public function store(HelpDeskRequest $request): JsonResponse
    {
        $data = $this->helpDeskService->store(
            HelpDeskDto::fromHelpDeskRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }
}
