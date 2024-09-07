<?php

declare(strict_types=1);

namespace App\Enums;

enum MedicalExpenseType: string
{
    case CONSULTATION = 'Consultation';
    case DIAGNOSTIC_TEST = 'Diagnostic';
    case PRESCRIPTION = 'Prescription';
    case PROCEDURE = 'Procedure';
    case EQUIPMENT = 'Equipment';
    case TRAINING = 'Training';

    public static function all(): array
    {
        return [
            self::CONSULTATION->value,
            self::DIAGNOSTIC_TEST->value,
            self::PRESCRIPTION->value,
            self::PROCEDURE->value,
            self::EQUIPMENT->value,
            self::TRAINING->value,
        ];
    }


}
