<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $patientId = Patient::inRandomOrder()->first()->id;
        return [
            'date_of_onset' => $this->faker->date(),
            'diagnosis' => $this->faker->sentence(),
            'symptoms' => $this->faker->paragraph(),
            'treatment' => $this->faker->paragraph(),
            'previous_interventions' => $this->faker->paragraph(),
            'test_results' => $this->faker->paragraph(),
            'progress' => $this->faker->paragraph(),
            'notes' => $this->faker->paragraph(),
            'patient_id' => $patientId
        ];
    }
}
