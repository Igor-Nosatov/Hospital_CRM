<?php

namespace Database\Factories\PatientManagement;

use App\Enums\MeetingStatus;
use App\Models\PatientManagement\Appointment;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MeetingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $appointment = Appointment::inRandomOrder()->first();

        return [
            'description' => $this->faker->sentence,
            'result' => $this->faker->paragraph,
            'written_entities' => $this->faker->sentence,
            'date' => Carbon::now()->subDays($this->faker->numberBetween(0, 5))->format('Y-m-d'),
            'meeting_status' => $this->faker->randomElement(MeetingStatus::all()),
            'appointment_id' => $appointment->id,
            'patient_id' =>$appointment->patient_id,
            'doctor_id' => $appointment->doctor_id,
        ];
    }
}
