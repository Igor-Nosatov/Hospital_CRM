<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\ApiController;
use App\Http\Requests\Api\V1\Auth\LoginRequest;
use App\Http\Requests\Api\V1\Auth\RegisterRequest;
use App\Services\Auth\AuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

final class AuthController extends ApiController
{
    public function __construct(private AuthService $authService){}

    public function register(RegisterRequest $request){
        try {
            $register = $this->authService->register($request);
            return $this->sendSuccessResponse($register );
        } catch (\InvalidArgumentException $e) {
            $errorPassword = [
                'password' => [__('auth.invalid_password')]
            ];
            return $this->sendErrorResponse($e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY, $errorPassword);
        };
    }
    public function login(LoginRequest $request): JsonResponse
    {
        try {
            $login = $this->authService->login($request);
            return $this->sendSuccessResponse($login);
        } catch (\InvalidArgumentException $e) {
            $errorPassword = [
                'password' => [__('auth.invalid_password')]
            ];
            return $this->sendErrorResponse($e->getMessage(), Response::HTTP_UNPROCESSABLE_ENTITY, $errorPassword);
        };
    }

    public function logout(Request $request): JsonResponse
    {
         $this->authService->logout($request);
         return $this->sendSuccessResponse();
    }
}
