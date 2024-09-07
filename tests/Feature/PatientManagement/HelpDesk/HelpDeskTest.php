<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\HelpDesk;

use Tests\TestCase;
use Faker\Factory as Faker;
use Tests\Traits\AuthenticatesUsers;

class HelpDeskTest extends TestCase
{
    use AuthenticatesUsers, HelpDeskJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_can_create_helpdesk_ticket()
    {
        $faker = Faker::create();

        $requestData = [
            'title' => $faker->word,
            'description' => $faker->paragraph,
            'doctor_id' => $faker->numberBetween(1, 10),
        ];

        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::BASE_URL_HELP_DESK, $requestData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getCreateHelpDeskTicketJsonStructure());

        $responseData = $response->json('data');

        $this->assertIsString($responseData['title']);
        $this->assertIsString($responseData['description']);
        $this->assertIsInt($responseData['doctor_id']);
        $this->assertIsString($responseData['created_at']);
        $this->assertIsString($responseData['updated_at']);
        $this->assertIsInt($responseData['id']);
    }
}
