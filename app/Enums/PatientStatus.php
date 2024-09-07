<?php

declare(strict_types=1);

namespace App\Enums;

enum PatientStatus: string
{
    case ACTIVE = 'Active';
    case BLOCKED = 'Blocked';
    case ARCHIVED = 'Archived';

    public static function all(): array
    {
        return [
            self::ACTIVE->value,
            self::BLOCKED->value,
            self::ARCHIVED->value,
        ];
    }
}
