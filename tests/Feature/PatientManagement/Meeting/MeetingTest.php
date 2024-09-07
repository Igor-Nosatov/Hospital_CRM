<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Meeting;

use App\Models\PatientManagement\Meeting;
use Tests\TestCase;
use Tests\Traits\AuthenticatesUsers;

class MeetingTest extends TestCase
{
    use AuthenticatesUsers, MeetingJsonStructure;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function test_get_meetings()
    {
        $response = $this->withHeaders($this->getAuthHeaders())
            ->get(self::BASE_URL_MEETINGS);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getMeetingListJsonStructure());
    }

    public function test_can_create_meeting()
    {
        $meetingData = Meeting::factory()->make()->toArray();

        $response = $this->withHeaders($this->getAuthHeaders())
            ->postJson(self::BASE_URL_MEETINGS, $meetingData);

        $response->assertStatus(self::STATUS_CODE_OK)
            ->assertJsonStructure($this->getCreateMeetingJsonStructure())
            ->assertJson([
                'status' => self::STATUS_CODE_OK,
                'message' => self::SUCCESS_MESSAGE,
                'data' => [
                    'description' => $meetingData['description'],
                    'result' => $meetingData['result'],
                    'written_entities' => $meetingData['written_entities'],
                    'date' => $meetingData['date'],
                    'appointment_id' => $meetingData['appointment_id'],
                    'patient_id' => $meetingData['patient_id'],
                    'doctor_id' => $meetingData['doctor_id'],
                ],
            ]);
    }
}
