<?php

declare(strict_types=1);

namespace App\Enums;

enum AppointmentType: string
{
    case OFFLINE = 'Offline';
    case ONLINE = 'Online';

    public static function all(): array
    {
        return [
            self::OFFLINE->value,
            self::ONLINE->value,
        ];
    }
}
