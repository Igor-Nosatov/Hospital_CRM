<?php

declare(strict_types=1);

namespace App\Enums;

enum PaymentStatus: string
{
    case PROCESSED = 'Processed';
    case PAID = 'Paid';
    case CONFIRMED = 'Confirmed';
    case PENDING = 'Pending';

    public static function all(): array
    {
        return [
            self::PROCESSED->value,
            self::PAID->value,
            self::CONFIRMED->value,
            self::PENDING->value,
        ];
    }
}
