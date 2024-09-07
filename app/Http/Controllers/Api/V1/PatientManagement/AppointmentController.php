<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\PatientManagement;

use App\DataTransferObjects\PatientManagement\AppointmentDto;
use App\DataTransferObjects\PatientManagement\UpdateAppointmentDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\PatientManagement\Appointment\AppointmentRequest;
use App\Http\Requests\Api\V1\PatientManagement\Appointment\UpdateAppointmentRequest;
use App\Models\PatientManagement\Appointment;
use App\Services\PatientManagement\AppointmentService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

final class AppointmentController extends ApiController
{
    public function __construct(
        private AppointmentService $appointmentService
    ) {}

    public function index(Request $request): JsonResponse
    {
        $data = $this->appointmentService->index($request);
        return $this->sendSuccessResponse($data);
    }

    public function store(AppointmentRequest $request): JsonResponse
    {
        $data = $this->appointmentService->store(
            AppointmentDto::fromAppointmentRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Appointment $appointment): JsonResponse
    {
        $data = $this->appointmentService->show($appointment->id);
        if (!$data) {
            return $this->sendErrorResponse('Appointment not found', Response::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }

    public function update(UpdateAppointmentRequest $request, Appointment $appointment)
    {
        try {
            $data = $this->appointmentService->update(
                UpdateAppointmentDto::fromRequest($request, $appointment->id),
                $appointment
            );
            return $this->sendSuccessResponse($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }
    public function destroy(Appointment $appointment): JsonResponse
    {
        $this->appointmentService->destroy($appointment);
        return $this->sendDeleteResponse('Data deleted successfully');
    }

    public function getAppointmentList(Request $request): JsonResponse
    {
        $data = $this->appointmentService->getAppointmentList($request);
        return $this->sendSuccessResponse($data);
    }
}
