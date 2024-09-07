<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\MedicalEvent;

use Tests\TestCase;
use Tests\Traits\AuthenticatesUsers;

class MedicalEventTest extends TestCase
{
    use AuthenticatesUsers, MedicalEventJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_get_medical_events()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_MEDICAL_EVENTS);

        $response->assertStatus(self::STATUS_CODE_OK);
        $response->assertJsonStructure($this->getMedicalEventJsonStructure());
    }

    public function test_unauthorized_access_to_medical_events()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer InvalidToken',
        ])->getJson(self::GET_MEDICAL_EVENTS);

        $response->assertStatus(self::STATUS_UNAUTHORIZED)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_UNAUTHORIZED,
            ]);
    }

    public function test_accessing_non_existent_route()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_MEDICAL_EVENTS . self::NON_EXIST_ROUTE);

        $response->assertStatus(self::STATUS_NOT_FOUND)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_NOT_FOUND,
            ]);
    }

    public function test_incorrect_http_method()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::GET_MEDICAL_EVENTS);

        $response->assertStatus(self::STATUS_METHOD_NOT_ALLOWED)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_METHOD_NOT_ALLOWED,
            ]);
    }

    public function test_invalid_query_parameters()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_MEDICAL_EVENTS . '?invalid_param=invalid');

        $response->assertStatus(self::STATUS_BAD_REQUEST)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_INVALID_PARAMETERS,
            ]);
    }
}
