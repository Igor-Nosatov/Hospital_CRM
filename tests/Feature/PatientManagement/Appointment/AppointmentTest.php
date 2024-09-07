<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Appointment;

use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Patient;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;
use Faker\Factory as Faker;
use Tests\Traits\AuthenticatesUsers;

class AppointmentTest extends TestCase
{
    use AuthenticatesUsers, AppointmentJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    private function getAuthHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . Auth::user()->token,
            'Accept' => 'application/json',
        ];
    }

    public function test_get_appointments()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::BASE_URL_APPOINTMENTS);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getAppointmentJsonStructure());
    }

    public function test_can_create_appointment()
    {
        $appointmentData = Appointment::factory()->make()->toArray();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::BASE_URL_APPOINTMENTS, $appointmentData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getCreateAppointmentJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => [
                    'appointment_datetime' => $appointmentData['appointment_datetime'],
                    'reason' => $appointmentData['reason'],
                    'symptoms' => $appointmentData['symptoms'],
                    'notes' => $appointmentData['notes'],
                    'status' => $appointmentData['status'],
                    'type' => $appointmentData['type'],
                    'reminder_datetime' => $appointmentData['reminder_datetime'],
                    'patient_id' => $appointmentData['patient_id'],
                    'doctor_id' => $appointmentData['doctor_id'],
                    'medical_service_id' => $appointmentData['medical_service_id'],
                ],
            ]);
    }

    public function test_can_delete_appointment()
    {
        $appointment = Appointment::factory()->create();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->deleteJson(self::BASE_URL_APPOINTMENTS . "/{$appointment->id}");

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::DATA_DELETED_SUCCESSFULLY_MESSAGE,
            ]);

        $this->assertDatabaseMissing('appointments', [
            'id' => $appointment->id,
        ]);
    }

    public function test_cannot_delete_non_existent_appointment()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->deleteJson(self::BASE_URL_APPOINTMENTS . '/' . self::INTEGER_FOR_TEST_STATUS_NOT_FOUND);

        $response->assertStatus(self::STATUS_NOT_FOUND)
            ->assertJson([
                'status' => self::STATUS_NOT_FOUND,
                'message' => 'Appointment not found',
            ]);
    }

    public function test_retrieve_an_appointment_by_id()
    {
        $doctor = Doctor::factory()->create();
        $appointment = Appointment::factory()->create([
            'doctor_id' => $doctor->id,
        ]);

        Auth::login($doctor->user);

        $response = $this->withHeaders($this->getAuthHeaders())
            ->getJson(self::BASE_URL_APPOINTMENTS . "/{$appointment->id}");

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getAppointmentByIdJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => [
                    'id' => $appointment->id,
                    'appointment_datetime' => $appointment->appointment_datetime->toDateTimeString(),
                    'reason' => $appointment->reason,
                    'symptoms' => $appointment->symptoms,
                    'notes' => $appointment->notes,
                    'status' => $appointment->status,
                    'type' => $appointment->type,
                    'reminder_datetime' => $appointment->reminder_datetime->toDateTimeString(),
                    'patient_id' => $appointment->patient_id,
                    'doctor_id' => $appointment->doctor_id,
                    'medical_service_id' => $appointment->medical_service_id,
                ],
            ]);
    }

    public function test_update_appointment()
    {
        $faker = Faker::create();

        $doctor = Doctor::factory()->create();
        $patient = Patient::factory()->create();

        $appointment = Appointment::factory()->create([
            'doctor_id' => $doctor->id,
            'patient_id' => $patient->id,
        ]);

        $updateData = [
            'appointment_datetime' => $faker->dateTimeBetween('+1 week', '+2 weeks')->format('Y-m-d H:i:s'),
            'reason' => $faker->sentence,
            'symptoms' => $faker->paragraph,
            'notes' => $faker->paragraph,
            'status' => $faker->randomElement(['active', 'pending', 'completed']),
            'reminder_datetime' => $faker->dateTimeBetween('now', '+1 week')->format('Y-m-d H:i:s'),
            'type' => $faker->randomElement(['Online', 'Offline']),
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
        ];

        $response = $this->withHeaders($this->getAuthHeaders())
            ->putJson(self::BASE_URL_APPOINTMENTS . "/{$appointment->id}", $updateData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getUpdateAppointmentJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => array_merge($updateData, [
                    'created_at' => $appointment->created_at->toDateTimeString(),
                    'updated_at' => now()->toDateTimeString(),
                    'medical_service_id' => $appointment->medical_service_id,
                    'deleted_at' => $appointment->deleted_at,
                ]),
            ]);
    }
}
