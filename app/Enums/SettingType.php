<?php

declare (strict_types = 1);

namespace App\Enums;

enum SettingType: string {
    case BILLING = 'Billing';
    case INSURANCE = 'Insurance';
    case NOTIFICATION = 'Notification';
    case PROFILE = 'Profile';

    public static function all(): array
    {
        return [
            self::BILLING->value,
            self::INSURANCE->value,
            self::NOTIFICATION->value,
            self::PROFILE->value,
        ];
    }
}
