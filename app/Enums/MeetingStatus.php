<?php

declare(strict_types=1);

namespace App\Enums;

enum MeetingStatus: string
{
    case ACTIVE = 'Active';
    case URGENTLY = 'Urgently';
    case CANCELLED = 'Cancelled';
    case OVERDUE = 'Overdue';
    case COMPLETED = 'Completed';

    public static function all(): array
    {
        return [
            self::ACTIVE->value,
            self::URGENTLY->value,
            self::CANCELLED->value,
            self::OVERDUE->value,
            self::COMPLETED->value,
        ];
    }
}


