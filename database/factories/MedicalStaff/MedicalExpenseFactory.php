<?php

namespace Database\Factories\MedicalStaff;

use App\Enums\MedicalExpenseType;
use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

class MedicalExpenseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $doctor = Doctor::inRandomOrder()->first();

        return [
            'medical_expense_type' => $this->faker->randomElement(MedicalExpenseType::all()),
            'amount' => $this->faker->numberBetween(100, 1000),
            'doctor_id' => $doctor->id,
        ];
    }
}
