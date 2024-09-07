<?php

declare(strict_types=1);

namespace App\DataTransferObjects\Auth;

use App\Http\Requests\Api\V1\Auth\Role\RoleRequest;

class RoleDto
{
    public function __construct(
        public string $name
    ) {}

    public static function fromRoleRequest(RoleRequest $request): RoleDto
    {
        return new self(
            name: $request->validated('name')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
