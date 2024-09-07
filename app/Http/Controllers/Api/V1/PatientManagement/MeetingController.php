<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\MeetingDto;
use App\DataTransferObjects\PatientManagement\MeetingUpdateDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Meeting\MeetingRequest;
use App\Http\Requests\Api\V1\PatientManagement\Meeting\MeetingUpdateRequest;
use App\Models\PatientManagement\Meeting;
use App\Services\PatientManagement\MeetingService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

final class MeetingController extends ApiController
{
    public function __construct(
        private MeetingService $meetingService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $data = $this->meetingService->index($request);
        return $this->sendSuccessResponse($data);
    }

    public function store(MeetingRequest $request): JsonResponse
    {
        $data = $this->meetingService->store(
            MeetingDto::fromMeetingRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Meeting $Meeting): JsonResponse
    {
        $data = $this->meetingService->show($Meeting);
        if (!$data) {
            return $this->sendErrorResponse('Meeting not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }

    public function update(MeetingUpdateRequest $request, Meeting $Meeting): JsonResponse
    {
        $data = $this->meetingService->update(
            MeetingUpdateDto::fromMeetingRequest($request),
            $Meeting,
        );
        return $this->sendSuccessResponse($data);
    }

}
