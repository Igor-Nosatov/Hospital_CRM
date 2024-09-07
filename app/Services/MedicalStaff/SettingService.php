<?php

declare (strict_types = 1);

namespace App\Services\MedicalStaff;

use App\DataTransferObjects\MedicalStaff\UpdateSettingDto;
use App\Enums\SettingType;
use App\Models\MedicalStaff\Setting;

class SettingService
{
    public function index():array
    {
        $settings = Setting::select(['id','setting_name','setting_type','setting_status','setting_desc'])->get();

        $data = [];

        foreach ($settings as $setting) {
            switch ($setting->setting_type) {
                case SettingType::BILLING:
                    $data['billing_settings'][] = $setting;
                    break;
                case SettingType::INSURANCE:
                    $data['insurance_settings'][] = $setting;
                    break;
                case SettingType::NOTIFICATION:
                    $data['notification_settings'][] = $setting;
                    break;
                case SettingType::PROFILE:
                    $data['profile_settings'][] = $setting;
                    break;
                default:
                    break;
            }
        }

        return $data;
    }

    public function update(UpdateSettingDto $dto, Setting $setting): void
    {
        $setting->update([
            'setting_status' => $dto->setting_status,
        ]);
    }
}
