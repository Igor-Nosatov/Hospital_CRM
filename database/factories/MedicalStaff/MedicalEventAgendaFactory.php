<?php

namespace Database\Factories\MedicalStaff;

use App\Models\MedicalStaff\MedicalEventAgenda;
use App\Models\MedicalStaff\MedicalEvent;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalEventAgendaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $medicalEvent = MedicalEvent::inRandomOrder()->first();
        $totalTimeUsed = MedicalEventAgenda::where('medical_event_id', $medicalEvent->id)
            ->take(8)
            ->sum('time');

        if ($totalTimeUsed >= 8 * 60) { 
            $medicalEvent = MedicalEvent::factory()->create();
        }

        return [
            'title' => $this->faker->sentence,
            'time' => $this->faker->time(),
            'session' => $this->faker->sentence(4),
            'description' => $this->faker->paragraph,
            'medical_event_id' => $medicalEvent->id
        ];
    }
}
