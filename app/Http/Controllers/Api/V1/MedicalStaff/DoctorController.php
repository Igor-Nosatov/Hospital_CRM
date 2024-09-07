<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\DoctorDto;
use App\DataTransferObjects\MedicalStaff\UpdateDoctorDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\Doctor\UpdateDoctorRequest;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\Api\V1\MedicalStaff\Doctor\DoctorRequest;
use App\Http\Resources\Api\V1\MedicalStaff\Doctor\DoctorResource;
use App\Models\Auth\User;
use App\Models\MedicalStaff\Doctor;
use App\Services\MedicalStaff\DoctorService;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

final class DoctorController extends ApiController
{
    public function __construct(
        private DoctorService $doctorService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->doctorService->index();
        return $this->sendSuccessResponse(DoctorResource::collection($data));
    }

    public function store(DoctorRequest $request): JsonResponse
    {
        $data = $this->doctorService->store(
            DoctorDto::fromDoctorRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function show(Doctor $doctor): JsonResponse
    {
        $data = $this->doctorService->show($doctor);
        if (!$data) {
            return $this->sendErrorResponse('Doctor not found', SymfonyResponse::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }

    public function patientVisits(): JsonResponse
    {
        $data = $this->doctorService->visitsForMonth();
        if (!$data) {
            return $this->sendErrorResponse('Doctor not found', SymfonyResponse::HTTP_NOT_FOUND);
        }
        return $this->sendSuccessResponse($data);
    }

    public function update(UpdateDoctorRequest $request, Doctor $doctor): JsonResponse
    {
        $data = $this->doctorService->update(
            UpdateDoctorDto::fromDoctorRequest($request),
            $doctor,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Doctor $doctor): JsonResponse
    {
        $this->doctorService->destroy($doctor);
        return $this->sendDeleteResponse('Data deleted successfully');
    }
}

