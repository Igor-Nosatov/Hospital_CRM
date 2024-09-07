<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

class HelpDeskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /** @var \App\Models\MedicalStaff\Doctor|null $doctor */
        $doctor = Doctor::inRandomOrder()->first();

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'doctor_id' => $doctor->id
        ];
    }
}
