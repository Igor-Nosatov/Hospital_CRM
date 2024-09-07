<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Documents;

use App\DataTransferObjects\Documents\ReceiptDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\Documents\Receipt\ReceiptRequest;
use App\Http\Resources\Api\V1\Documents\Receipt\ReceiptResource;
use App\Http\Resources\Api\V1\Documents\Receipt\SingleReceiptResource;
use App\Models\Documents\Receipt;
use App\Services\Documents\ReceiptService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class ReceiptController extends ApiController
{
    public function __construct(
        private ReceiptService $receiptService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->receiptService->index();
        return $this->sendSuccessResponse(ReceiptResource::collection($data));
    }

    public function store(ReceiptRequest $request): JsonResponse
    {
        $data = $this->receiptService->store(
            ReceiptDto::fromReceiptRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Receipt $receipt): JsonResponse
    {
        $data = $this->receiptService->show($receipt);
        if (!$data) {
            return $this->sendErrorResponse('Receipt not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse(SingleReceiptResource::collection($data));
    }

    public function update(ReceiptRequest $request, Receipt $receipt): JsonResponse
    {
        $data = $this->receiptService->update(
            ReceiptDto::fromReceiptRequest($request),
            $receipt,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Receipt $receipt): JsonResponse
    {
        $this->receiptService->destroy($receipt);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
