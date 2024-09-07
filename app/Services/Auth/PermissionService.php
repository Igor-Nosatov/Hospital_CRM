<?php

declare(strict_types=1);

namespace App\Services\Auth;

use App\DataTransferObjects\Auth\PermissionDto;
use App\Models\Auth\Permission;
use Illuminate\Database\Eloquent\Collection;

class PermissionService {
    public function index():Collection
    {
        return Permission::get();
    }

    public function show($permission):Collection
    {
        return Permission::with(['user'])->find($permission);
    }

    public function store(PermissionDto $dto): Permission
    {
        return Permission::create($dto->toArray());
    }

    public function update(PermissionDto $dto, Permission $permission): Permission
    {
        $permission->update($dto->toArray());
        return $permission;
    }

    public function destroy(Permission $permission): void
    {
        $permission->delete();
    }
}
