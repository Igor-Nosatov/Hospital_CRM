<?php

namespace Database\Factories\PatientManagement;

use App\Enums\MedicationTiming;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class TreatmentPlanFactory extends Factory
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
            'medicament_name' => $this->faker->word,
            'medication_dosage' => $this->faker->randomNumber(2) . ' mg',
            'medication_frequency' => $this->faker->randomNumber(1),
            'medication_timing' => $this->faker->randomElement(MedicationTiming::all()),
            'patient_id' => $patient->id,
        ];
    }
}
