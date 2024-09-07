<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Auth;

use App\DataTransferObjects\Auth\UserDto;
use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\Auth\User\UserRequest;
use App\Http\Resources\Api\V1\Auth\UserResource;
use App\Models\Auth\User;
use Illuminate\Http\JsonResponse;

final class UserController extends ApiController
{
    public function __construct(
        private UserService $userService
    ) {}

    public function index(): JsonResponse
    {
        $data = $this->userService->index();
        return $this->sendSuccessResponse(UserResource::collection($data));
    }

    public function store(UserRequest $request): JsonResponse
    {
        $data = $this->userService->store(
            UserDto::fromUserRequest($request),
        );
        return $this->sendSuccessResponse($data);
    }

    public function update(UserRequest $request, User $user): JsonResponse
    {
        $data = $this->userService->update(
            UserDto::fromUserRequest($request),
            $user,
        );
        return $this->sendSuccessResponse($data);
    }

    public function destroy(User $user): JsonResponse
    {
        $this->userService->destroy($user);
        return $this->sendSuccessResponse(null,'Data deleted successfully');
    }
}
