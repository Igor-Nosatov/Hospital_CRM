<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Doctor;

use App\Models\MedicalStaff\Doctor;
use Tests\TestCase;
use Faker\Factory as Faker;
use Tests\Traits\AuthenticatesUsers;

class DoctorTest extends TestCase
{
    use AuthenticatesUsers, DoctorJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_can_get_doctor_profile_data()
    {
        $doctor = Doctor::factory()->create();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::BASE_DOCTOR_URL . $doctor->id);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getDoctorProfileJsonStructure());
    }

    public function test_can_create_doctor()
    {
        $doctorData = Doctor::factory()->make()->toArray();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::BASE_DOCTOR_URL, $doctorData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getCreateDoctorJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => array_merge($doctorData, [
                    'updated_at' => now()->toISOString(),
                    'created_at' => now()->toISOString(),
                ]),
            ]);
    }

    public function test_can_delete_doctor()
    {
        $doctor = Doctor::factory()->create();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->deleteJson(self::BASE_DOCTOR_URL . $doctor->id);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::DATA_DELETED_SUCCESSFULLY_MESSAGE,
            ]);

        $this->assertDatabaseMissing('doctors', [
            'id' => $doctor->id,
        ]);
    }

    public function test_cannot_delete_non_existent_doctor()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->deleteJson(self::BASE_DOCTOR_URL . self::INTEGER_FOR_TEST_STATUS_NOT_FOUND);

        $response->assertStatus(self::STATUS_NOT_FOUND)
            ->assertJson([
                'status' => self::STATUS_NOT_FOUND,
                'message' => self::ERROR_DOCTOR_NOT_FOUND,
            ]);
    }

    public function test_can_show_doctor_by_id()
    {
        $faker = Faker::create();

        $doctor = Doctor::factory()->create([
            'full_name' => $faker->name,
            'address' => $faker->address,
            'email' => $faker->safeEmail,
            'phone_number' => $faker->phoneNumber,
            'date_of_birth' => $faker->date,
            'religion' => $faker->word,
            'biography' => $faker->paragraph,
            'education' => $faker->paragraphs(2, true),
            'experience' => $faker->paragraphs(2, true),
            'languages' => $faker->words(2, true),
            'current_location' => $faker->words(2, true),
            'certifications' => $faker->paragraphs(2, true),
            'medical_license' => $faker->paragraphs(2, true),
            'professional_memberships' => $faker->words(2, true),
            'awards' => $faker->paragraphs(2, true),
            'publications' => $faker->paragraphs(2, true),
            'research_interests' => $faker->words(2, true),
        ]);

        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::BASE_DOCTOR_URL . $doctor->id);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getDoctorProfileJsonStructure());
    }

    public function test_update_doctor()
    {
        $faker = Faker::create();

        $doctor = Doctor::factory()->create();

        $updateData = [
            'working_mode' => $faker->randomElement(['online', 'offline']),
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'email' => $faker->unique()->safeEmail,
            'date_of_birth' => $faker->date('Y-m-d'),
            'religion' => $faker->word,
            'address' => $faker->address,
            'phone_number' => $faker->phoneNumber,
            'gender' => $faker->randomElement(['Male', 'Female']),
            'marital_status' => $faker->randomElement(['Single', 'Married', 'Divorced']),
            'status' => $faker->randomElement(['active', 'inactive']),
            'speciality_id' => $faker->numberBetween(1, 50),
            'department_id' => $faker->numberBetween(1, 20),
            'nationality_id' => $faker->numberBetween(1, 10),
            'user_id' => $faker->numberBetween(1, 100),
            'country_id' => $faker->numberBetween(1, 200),
        ];

        $response = $this->withHeaders($this->getAuthHeaders())
            ->putJson(self::BASE_DOCTOR_URL . $doctor->id, $updateData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getUpdateDoctorJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => array_merge($updateData, [
                    'created_at' => $doctor->created_at->toISOString(),
                    'updated_at' => now()->toISOString(),
                    'education' => $doctor->education,
                    'experience' => $doctor->experience,
                    'languages' => $doctor->languages,
                    'current_location' => $doctor->current_location,
                    'certifications' => $doctor->certifications,
                    'medical_license' => $doctor->medical_license,
                    'professional_memberships' => $doctor->professional_memberships,
                    'awards' => $doctor->awards,
                    'publications' => $doctor->publications,
                    'research_interests' => $doctor->research_interests,
                ]),
            ]);
    }
}
