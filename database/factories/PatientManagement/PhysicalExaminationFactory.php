<?php

namespace Database\Factories\PatientManagement;

use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PhysicalExaminationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $patient = Patient::inRandomOrder()->first();
        return [
            'height' => $this->faker->numberBetween(150, 200),
            'weight' => $this->faker->numberBetween(50, 100),
            'heart_rate' => $this->faker->numberBetween(60, 100),
            'blood_pressure' => $this->faker->randomElement(['120/80', '130/90', '140/90']),
            'patient_id' => $patient->id,
        ];
    }
}
