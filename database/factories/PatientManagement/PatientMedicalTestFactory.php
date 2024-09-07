<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\PatientMedicalTest;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientMedicalTestFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PatientMedicalTest::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        /** @var \App\Models\MedicalStaff\Doctor|null $doctor */
        $doctor = Doctor::inRandomOrder()->first();

        /** @var \App\Models\PatientManagement\Patient|null $patient */
        $patient = $doctor->patients()->inRandomOrder()->first();

        $filePath = $this->faker->word() . '.pdf';
        return [
            'date_of_medical_analysis' => $this->faker->date(),
            'title' => $this->faker->sentence(),
            'file_path' => $filePath,
            'disk' => 'local',
            'mime_type' => 'application/pdf',
            'file_hash' => $this->faker->unique()->sha256,
            'collection' => null,
            'size' => $this->faker->numberBetween(1000, 5000),
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
        ];
    }
}
