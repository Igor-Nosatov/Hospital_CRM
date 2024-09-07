<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Auth;

use App\DataTransferObjects\Auth\RoleDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\Auth\Role\RoleRequest;
use App\Http\Resources\Api\V1\Auth\RoleResource;
use App\Models\Auth\Role;
use App\Services\Auth\RoleService;
use Illuminate\Http\JsonResponse;

final class RoleController extends ApiController
{
    public function __construct(
        private RoleService $roleService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->roleService->index();
        return $this->sendSuccessResponse(RoleResource::collection($data));
    }

    public function store(RoleRequest $request): JsonResponse
    {
        $data = $this->roleService->store(
            RoleDto::fromRoleRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(Role $role): JsonResponse
    {
        $this->roleService->destroy($role);
        return $this->sendSuccessResponse(null,'Data deleted successfully');
    }
}
