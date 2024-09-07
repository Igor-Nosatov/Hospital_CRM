<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Patient;

use App\Models\PatientManagement\Patient;
use Tests\TestCase;
use Faker\Factory as Faker;
use Tests\Traits\AuthenticatesUsers;

class PatientTest extends TestCase
{
    use AuthenticatesUsers, PatientJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_get_patients()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
                         ->get(self::BASE_URL_PATIENTS);

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getGetPatientsJsonStructure());
    }

    public function test_create_patient()
    {
        $postData = Patient::factory()->make();

        $response = $this->withHeaders($this->getAuthHeaders())
                         ->postJson(self::BASE_URL_PATIENTS, $postData->toArray());

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getCreatePatientJsonStructure())
                 ->assertJson([
                     'status' => self::STATUS_CODE_OK,
                     'message' => self::SUCCESS_MESSAGE,
                     'data' => [
                         'first_name' => $postData->first_name,
                         'last_name' => $postData->last_name,
                         'date_of_birth' => $postData->date_of_birth,
                         'religion' => $postData->religion,
                         'occupation' => $postData->occupation,
                         'address' => $postData->address,
                         'phone_number' => $postData->phone_number,
                         'identity_code' => $postData->identity_code,
                         'legal_representative_first_name' => $postData->legal_representative_first_name,
                         'legal_representative_last_name' => $postData->legal_representative_last_name,
                         'legal_representative_relationship' => $postData->legal_representative_relationship,
                         'legal_representative_phone_number' => $postData->legal_representative_phone_number,
                         'marital_status' => $postData->marital_status,
                         'status' => $postData->status,
                         'doctor_id' => $postData->doctor_id,
                     ],
                 ]);
    }

    public function test_can_delete_patient()
    {
        $patient = Patient::factory()->create();

        $response = $this->withHeaders($this->getAuthHeaders())
                         ->deleteJson(self::BASE_URL_PATIENTS."/{$patient->id}");

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJson($this->getDeletePatientJsonStructure());

        $this->assertDatabaseMissing('patients', [
            'id' => $patient->id,
        ]);
    }

    public function test_cannot_delete_non_existent_patient()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
                         ->deleteJson(self::BASE_URL_PATIENTS.self::INTEGER_FOR_TEST_STATUS_NOT_FOUND);

        $response->assertStatus(self::STATUS_NOT_FOUND)
                 ->assertJson([
                     'status' => self::STATUS_NOT_FOUND,
                     'message' => self::ERROR_PATIENT_NOT_FOUND
                 ]);
    }

    public function test_can_show_patient_by_id()
    {
        $patient = Patient::factory()->create();

        $response = $this->withHeaders($this->getAuthHeaders())
                         ->getJson(self::BASE_URL_PATIENTS."/{$patient->id}");

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getShowPatientByIdJsonStructure());
    }

    public function testUpdatePatient()
    {
        $patient = Patient::factory()->create();

        $faker = Faker::create();

        $updateData = [
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'date_of_birth' => $faker->date,
            'religion' => $faker->word,
            'occupation' => $faker->jobTitle,
            'address' => $faker->address,
            'phone_number' => $faker->phoneNumber,
            'legal_representative_first_name' => $faker->firstName,
            'legal_representative_last_name' => $faker->lastName,
            'legal_representative_relationship' => $faker->word,
            'legal_representative_phone_number' => $faker->phoneNumber,
            'marital_status' => $faker->word,
            'status' => $faker->word,
        ];

        $response = $this->withHeaders($this->getAuthHeaders())
                         ->json('PUT', self::BASE_URL_PATIENTS . $patient->id, $updateData);

        $response->assertStatus(self::STATUS_CODE_OK)
                 ->assertJsonStructure($this->getUpdatePatientJsonStructure());

        $this->assertDatabaseHas('patients', $updateData);
    }
}
