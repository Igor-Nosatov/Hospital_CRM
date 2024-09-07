<?php

declare(strict_types=1);

namespace App\Services\Auth;

use App\Models\Auth\User;
use App\Models\MedicalStaff\Doctor;
use Illuminate\Support\Facades\Hash;

class AuthService
{
    public function register($request): array
    {
        $user = User::create([
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'password' => Hash::make($request->validated('password')),
        ]);

        $this->makeRandomDoctor($user->id);

        $token = $user->createToken('auth_token')->plainTextToken;
        $response = [
            'status' => 'success',
            'msg' => 'Register successfully',
            'content' => [
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user_name' => $user->name,
                'user_email' => $user->email,
                'user_id' => $user->id,
                'doctor_id' => $user->doctor->id,
            ]
        ];

        return $response;
    }

    public function login($request): array
    {
        $user = User::where('email', $request->validated('email'))->first();

        if (!Hash::check($request->validated('password'), $user->password)) {
            $passwordIncorrect = __('auth.invalid_password');
            throw new \InvalidArgumentException($passwordIncorrect, 422);
        }
        $token = $user->createToken('auth_token')->plainTextToken;
        $response = [
            'status' => 'success',
            'msg' => 'Login successfully',
            'content' => [
                'status_code' => 200,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user_name' => $user->name,
                'user_email' => $user->email,
                'user_id' => $user->id,
                'doctor_id' => $user->doctor->id,
            ]
        ];

        return $response;
    }

    private function makeRandomDoctor($userId)
    {
        Doctor::factory()->create(['user_id' => $userId]);
    }

    public function logout($request): void
    {
        $request->user()->tokens()->delete();
    }
}
