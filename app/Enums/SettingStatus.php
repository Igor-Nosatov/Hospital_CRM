<?php

declare (strict_types = 1);

namespace App\Enums;

enum SettingStatus: string {
    case ENABLE = 'Enabled';
    case DISABLE = 'Disabled';

    public static function all(): array
    {
        return [
            self::ENABLE->value,
            self::DISABLE->value,
        ];
    }
}
