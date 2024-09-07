<?php

declare(strict_types=1);

namespace App\Enums;

enum CurrencyType: string
{
    case USD = 'USD';
    case EUR = 'EUR';
    case GBP = 'GBP';
    case JPY = 'JPY';
    case CAD = 'CAD';
    case AUD = 'AUD';
    case CHF = 'CHF';
    case CNY = 'CNY';
    case HKD = 'HKD';
    case INR = 'INR';

    public static function all(): array
    {
        return [
            self::USD->value,
            self::EUR->value,
            self::GBP->value,
            self::JPY->value,
            self::CAD->value,
            self::AUD->value,
            self::CHF->value,
            self::CNY->value,
            self::HKD->value,
            self::INR->value,
        ];
    }
}
