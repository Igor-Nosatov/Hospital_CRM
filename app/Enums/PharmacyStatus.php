<?php

declare(strict_types=1);

namespace App\Enums;

enum PharmacyStatus: string
{
    case ACTIVE = 'active';
    case BLOCKED = 'blocked';
    case ARCHIVED = 'archived';

    public static function all(): array
    {
        return [
            self::ACTIVE->value,
            self::BLOCKED->value,
            self::ARCHIVED->value,
        ];
    }
}
