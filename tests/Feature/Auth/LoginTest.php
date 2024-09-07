<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;
use Tests\Traits\AuthenticatesUsers;

class LoginTest extends TestCase
{
    use AuthenticatesUsers;

    private const INVALID_EMAIL = 'invalidemail';
    private const VALID_PASSWORD = 'password';
    private const INVALID_EMAIL_ADDRESS = 'invalid@example.com';
    private const INVALID_PASSWORD = 'invalidpassword';

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_user_can_login(): void
    {
        $this->assertNotEmpty($this->authToken);
    }

    public function test_login_with_invalid_credentials(): void
    {
        $response = $this->post(self::POST_LOGIN, [
            'email' => self::INVALID_EMAIL_ADDRESS,
            'password' => self::INVALID_PASSWORD,
        ]);

        $response->assertStatus(self::STATUS_NOT_FOUND)
                 ->assertJson([
                     'status' => self::STATUS_NOT_FOUND,
                     'message' => self::ERROR_UNAUTHORIZED,
                 ]);
    }

    public function test_login_with_missing_credentials(): void
    {
        $response = $this->post(self::POST_LOGIN, []);

        $response->assertStatus(self::STATUS_BAD_REQUEST)
                 ->assertJson([
                     'status' => self::STATUS_BAD_REQUEST,
                     'message' => self::ERROR_INVALID_PARAMETERS,
                 ]);
    }

    public function test_login_with_invalid_email_format(): void
    {
        $response = $this->post(self::POST_LOGIN, [
            'email' => self::INVALID_EMAIL,
            'password' => self::VALID_PASSWORD,
        ]);

        $response->assertStatus(self::STATUS_BAD_REQUEST)
                 ->assertJson([
                     'status' => self::STATUS_BAD_REQUEST,
                     'message' => self::ERROR_INVALID_PARAMETERS,
                 ]);
    }
}
