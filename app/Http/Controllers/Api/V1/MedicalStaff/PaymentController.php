<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\PaymentDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\Payment\PaymentRequest;
use App\Http\Resources\Api\V1\MedicalStaff\Payment\PaymentResource;
use App\Models\MedicalStaff\Payment;
use App\Services\MedicalStaff\PaymentService;
use Illuminate\Http\JsonResponse;

final class PaymentController extends ApiController
{
    public function __construct(
        private PaymentService $paymentService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->paymentService->index();
        return $this->sendSuccessResponse(PaymentResource::collection($data));
    }

    public function store(PaymentRequest $request): JsonResponse
    {
        $data = $this->paymentService->store(
            PaymentDto::fromPaymentRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Payment $payment): JsonResponse
    {
        $this->paymentService->destroy($payment);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}
