<?php

namespace Database\Factories\MedicalStaff;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorNotification;
use Illuminate\Database\Eloquent\Factories\Factory;

class DoctorNotificationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DoctorNotification::class;

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
            'message' => $this->faker->paragraph,
            'read' => $this->faker->boolean,
            'doctor_id' => $doctor->id
        ];
    }
}
