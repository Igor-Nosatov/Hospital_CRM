<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\PhysicalExamination;

use App\Models\PatientManagement\PhysicalExamination;
use Tests\TestCase;
use Faker\Factory as Faker;
use Tests\Traits\AuthenticatesUsers;

class PhysicalExaminationTest extends TestCase
{
    use AuthenticatesUsers, PhysicalExaminationJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_get_physical_examination()
    {
        $physicalExamination = PhysicalExamination::factory()->create();
        $response = $this->withHeaders($this->getAuthHeaders())
                         ->getJson(self::BASE_URL_PHYSICAL_EXAMINATION . $physicalExamination->id);

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getGetPhysicalExaminationJsonStructure());
    }

    public function test_store_physical_examination()
    {
        $faker = Faker::create();

        $requestData = [
            'height' => $faker->numberBetween(140, 200),
            'weight' => $faker->numberBetween(50, 100),
            'heart_rate' => $faker->numberBetween(60, 100),
            'blood_pressure' => $faker->numberBetween(110, 140) . '/' . $faker->numberBetween(70, 90),
            'patient_id' => $faker->numberBetween(1, 50),
        ];

        $response = $this->withHeaders($this->getAuthHeaders())
                         ->postJson(self::BASE_URL_PHYSICAL_EXAMINATION, $requestData);

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getStorePhysicalExaminationJsonStructure())
                 ->assertJson([
                     'status' => self::STATUS_CODE_OK,
                     'message' => self::SUCCESS_MESSAGE,
                     'data' => [
                         'height' => $requestData['height'],
                         'weight' => $requestData['weight'],
                         'heart_rate' => $requestData['heart_rate'],
                         'blood_pressure' => $requestData['blood_pressure'],
                         'patient_id' => $requestData['patient_id'],
                     ],
                 ]);
    }

    public function test_unauthorized_access_to_physical_examination()
    {
        $physicalExamination = PhysicalExamination::factory()->create();
        $response = $this->withHeaders([
            'Authorization' => 'Bearer InvalidToken',
        ])->getJson(self::BASE_URL_PHYSICAL_EXAMINATION . $physicalExamination->id);

        $response->assertStatus(self::STATUS_UNAUTHORIZED);
        $response->assertJson([
            'status' => 'error',
            'message' => self::ERROR_UNAUTHORIZED,
        ]);
    }

    public function test_accessing_non_existent_physical_examination_route()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
                         ->getJson(self::BASE_URL_PHYSICAL_EXAMINATION . self::INTEGER_FOR_TEST_STATUS_NOT_FOUND);

        $response->assertStatus(self::STATUS_NOT_FOUND);
        $response->assertJson([
            'status' => 'error',
            'message' => self::ERROR_PATIENT_NOT_FOUND,
        ]);
    }
}
