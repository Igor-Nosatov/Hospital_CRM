<?php

declare(strict_types=1);

namespace App\Enums;

enum OrganizationTypeStatus: string
{
    case DRAFT = 'Draft';
    case ACTIVE = 'Active';
    case BLOCKED = 'Blocked';
    case ARCHIVED = 'Archived';

    public static function all(): array
    {
        return [
            self::DRAFT->value,
            self::ACTIVE->value,
            self::BLOCKED->value,
            self::ARCHIVED->value,
        ];
    }
}
