<?php

namespace Database\Factories\MedicalStaff;

use App\Enums\MedicalEventType;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();

        $medicalEvents = [];

        while ($startDate <= $endDate) {
            $medicalEvents= [
                'name' => $this->faker->sentence(2),
                'organizer' => $this->faker->name(),
                'event_date' => $startDate->format('Y-m-d'),
                'medical_event_type' => MedicalEventType::ONLINE,
                'language' => $this->faker->languageCode(),
                'url_img' => $this->faker->imageUrl(),
            ];

            $startDate->addDay();
        }

        return $medicalEvents;
    }
}
