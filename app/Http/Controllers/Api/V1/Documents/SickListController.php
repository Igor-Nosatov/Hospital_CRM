<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Documents;

use App\DataTransferObjects\Documents\SickListDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\Documents\SickList\SickListRequest;
use App\Http\Resources\Api\V1\Documents\SickList\SickListResource;
use App\Http\Resources\Api\V1\Documents\SickList\SingleSickListResource;
use App\Models\Documents\SickList;
use App\Services\Documents\SickListService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class SickListController extends ApiController
{
    public function __construct(
        private SickListService $sickListService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->sickListService->index();
        return $this->sendSuccessResponse(SickListResource::collection($data));
    }

    public function store(SickListRequest $request): JsonResponse
    {
        $data = $this->sickListService->store(
            SickListDto::fromSickListRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(SickList $sickList): JsonResponse
    {
        $data = $this->sickListService->show($sickList);
        if (!$data) {
            return $this->sendErrorResponse('SickList not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse(SingleSickListResource::collection($data));
    }

    public function update(SickListRequest $request, SickList $sickList): JsonResponse
    {
        $data = $this->sickListService->update(
            SickListDto::fromSickListRequest($request),
            $sickList,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(SickList $sickList): JsonResponse
    {
        $this->sickListService->destroy($sickList);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
