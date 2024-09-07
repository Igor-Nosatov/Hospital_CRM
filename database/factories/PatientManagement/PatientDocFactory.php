<?php

namespace Database\Factories\PatientManagement;

use App\Enums\PatientDocType;
use App\Models\PatientManagement\PatientDoc;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientDocFactory extends Factory
{
    protected $model = PatientDoc::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /** @var \App\Models\MedicalStaff\Doctor|null $doctor */
        $doctor = Doctor::inRandomOrder()->first();

        /** @var \App\Models\PatientManagement\Patient|null $patient */
        $patient = $doctor ? $doctor->patients()->inRandomOrder()->first() : Patient::inRandomOrder()->first();

        return [
            'title' => $this->faker->sentence,
            'document_type' => $this->faker->randomElement(PatientDocType::cases()),
            'document_name' => $this->faker->word . '.' . $this->faker->fileExtension,
            'mime_type' => $this->faker->mimeType,
            'path' => $this->faker->filePath,
            'disk' => $this->faker->randomElement(['local', 's3']),
            'file_hash' => $this->faker->unique()->sha256,
            'collection' => $this->faker->word,
            'size' => $this->faker->numberBetween(1000, 1000000),
            'patient_id' => $patient ? $patient->id : Patient::factory(),
            'doctor_id' => $doctor ? $doctor->id : Doctor::factory(),
        ];
    }

    /**
     * Generate random medical data for the document_info field.
     *
     * @return array<string, mixed>
     */
    protected function generateRandomMedicalData(): array
    {
        return [
            'symptoms' => $this->faker->words(5, true),
            'diagnosis' => $this->faker->words(3, true),
            'treatment' => $this->faker->sentence,
            'medications' => [
                [
                    'name' => $this->faker->word,
                    'dosage' => $this->faker->randomDigitNotZero() . ' mg',
                    'frequency' => $this->faker->randomElement(['once a day', 'twice a day', 'three times a day']),
                ],
                [
                    'name' => $this->faker->word,
                    'dosage' => $this->faker->randomDigitNotZero() . ' mg',
                    'frequency' => $this->faker->randomElement(['once a day', 'twice a day', 'three times a day']),
                ],
            ],
            'follow_up' => $this->faker->dateTimeBetween('+1 week', '+1 month')->format('Y-m-d'),
        ];
    }
}
