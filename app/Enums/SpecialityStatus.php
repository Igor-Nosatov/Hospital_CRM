<?php

declare(strict_types=1);

namespace App\Enums;

enum SpecialityStatus: string
{
    case ACTIVE = 'active';
    case ARCHIVED = 'archived';

    public static function all(): array
    {
        return [
            self::ACTIVE->value,
            self::ARCHIVED->value,
        ];
    }
}
