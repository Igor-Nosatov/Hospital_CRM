<?php

declare(strict_types=1);

namespace App\Enums;

enum MedicationTiming: string
{
    case AFTER_MEAL = 'AfterMeal';
    case BEFORE_MEAL = 'BeforeMeal';
    case AT_NIGHT = 'AtNight';
    case DURING_THE_DAY = 'DuringTheDay';

    public static function all(): array
    {
        return [
            self::AFTER_MEAL->value,
            self::BEFORE_MEAL->value,
            self::AT_NIGHT->value,
            self::DURING_THE_DAY->value,
        ];
    }
}

