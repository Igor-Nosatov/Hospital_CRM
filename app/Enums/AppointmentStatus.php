<?php

declare(strict_types=1);

namespace App\Enums;

enum AppointmentStatus: string
{
    case ACTIVE = 'active';
    case COMPLETED = 'completed';
    case CANCELED = 'canceled';

    public static function all(): array
    {
        return [
            self::ACTIVE->value,
            self::COMPLETED->value,
            self::CANCELED->value,
        ];
    }
}
