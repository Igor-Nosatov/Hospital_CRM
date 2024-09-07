<?php

namespace Database\Factories\MedicalStaff;

use App\Models\MedicalStaff\DoctorReview;
use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

class DoctorReviewFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DoctorReview::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $doctor = Doctor::inRandomOrder()->first();
        $patients =  $doctor->patients()->inRandomOrder()->first();

        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'rank' => $this->faker->numberBetween(4, 5),
            'patient_id' => $patients->id,
            'doctor_id' => $doctor->id
        ];
    }
}
