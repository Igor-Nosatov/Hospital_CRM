<?php

declare(strict_types=1);

namespace App\Services\Auth;

use App\DataTransferObjects\Auth\RoleDto;
use App\Models\Auth\Role;
use Illuminate\Database\Eloquent\Collection;
class RoleService {
    public function index():Collection
    {
        return Role::get();
    }

    public function show($role):Collection
    {
        return Role::with(['user'])->find($role);
    }

    public function store(RoleDto $dto): Role
    {
        return Role::create($dto->toArray());
    }

    public function update(RoleDto $dto, Role $role): Role
    {
        $role->update($dto->toArray());
        return $role;
    }

    public function destroy(Role $role): void
    {
        $role->delete();
    }
}
