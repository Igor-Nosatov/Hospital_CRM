<?php

declare(strict_types=1);

namespace App\Enums;

enum MaritalStatus: string
{
    case SINGLE = 'Single';
    case MARRIED = 'Married';
    case DIVORCED = 'Divorced';
    case WIDOWED = 'Widowed';
    case SEPARATED = 'Separated';

    public static function all(): array
    {
        return [
            self::SINGLE->value,
            self::MARRIED->value,
            self::DIVORCED->value,
            self::WIDOWED->value,
            self::SEPARATED->value,
        ];
    }
}
