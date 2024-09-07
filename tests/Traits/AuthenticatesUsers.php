<?php

declare(strict_types=1);

namespace Tests\Traits;

trait AuthenticatesUsers
{
    protected $authToken;

    /**
     * Authenticates a user with credentials provided from the .env file.
     *
     * @return void
     */
    public function authenticateUserWithEnvCredentials(): void
    {
        $credentials = [
            'email' => env('USER_EMAIL_FOR_TESTING', 'default_email@example.com'),
            'password' => env('USER_PASSWORD_FOR_TESTING', 'default_password'),
        ];

        $this->authenticateUser($credentials);
    }

    /**
     * Authenticates a user with the provided credentials.
     *
     * @param array $credentials
     * @return void
     */
    public function authenticateUser(array $credentials): void
    {
        $response = $this->post('/api/v1/login', $credentials);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'status',
                'message',
                'data' => [
                    'status',
                    'msg',
                    'content' => [
                        'status_code',
                        'access_token',
                        'token_type',
                        'user_name',
                        'user_email',
                        'user_id',
                        'doctor_id',
                    ],
                ],
            ]);

        $content = $response->json('data.content');
        $this->authToken = $content['access_token'];
    }

    /**
     * Returns the authorization headers for the authenticated user.
     *
     * @return array
     */
    public function getAuthHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . $this->authToken,
        ];
    }
}
