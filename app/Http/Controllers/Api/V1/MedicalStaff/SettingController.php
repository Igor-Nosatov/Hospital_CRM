<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\UpdateSettingDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\MedicalStaff\UpdateSettingRequest;
use App\Models\MedicalStaff\Setting;
use App\Services\MedicalStaff\SettingService;
use Illuminate\Http\JsonResponse;

final class SettingController extends ApiController
{
    public function __construct(
        private SettingService $settingService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->settingService->index();
        return $this->sendSuccessResponse($data);
    }


    public function update(UpdateSettingRequest $request,Setting $setting): JsonResponse
    {
        try {
            $data = $this->settingService->update(
                UpdateSettingDto::fromRequest($request, $setting->id),
                $setting
            );
            return $this->sendSuccessResponse($data);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }
}
