<?php

declare(strict_types=1);

namespace App\Enums;

enum WorkingMode: string
{
    case ONLINE = 'online';
    case OFFLINE = 'offline';

    public static function all(): array
    {
        return [
            self::ONLINE->value,
            self::OFFLINE->value,
        ];
    }
}
