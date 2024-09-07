<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Salary;

use Tests\TestCase;
use Tests\Traits\AuthenticatesUsers;

class SalaryTest extends TestCase
{
    use AuthenticatesUsers, SalaryJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_get_salary_report()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_SALARY_REPORT);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getSalaryJsonStructure());
    }

    public function test_unauthorized_access_to_salary_report()
    {
        $response = $this->withHeaders([
            'Authorization' => 'Bearer InvalidToken',
        ])->getJson(self::GET_SALARY_REPORT);

        $response->assertStatus(self::STATUS_UNAUTHORIZED)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_UNAUTHORIZED,
            ]);
    }

    public function test_accessing_non_existent_route()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_SALARY_REPORT . self::NON_EXIST_ROUTE);

        $response->assertStatus(self::STATUS_NOT_FOUND)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_NOT_FOUND,
            ]);
    }

    public function test_incorrect_http_method()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::GET_SALARY_REPORT);

        $response->assertStatus(self::STATUS_METHOD_NOT_ALLOWED)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_METHOD_NOT_ALLOWED,
            ]);
    }

    public function test_invalid_query_parameters()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::GET_SALARY_REPORT . '?invalid_param=invalid');

        $response->assertStatus(self::STATUS_BAD_REQUEST)
            ->assertJson([
                'status' => 'error',
                'message' => self::ERROR_INVALID_PARAMETERS,
            ]);
    }
}
