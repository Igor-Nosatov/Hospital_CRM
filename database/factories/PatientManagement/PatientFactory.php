<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Enums\MaritalStatus;
use App\Enums\PatientStatus;
use App\Models\MedicalStaff\Doctor;
use App\Models\PatientManagement\Insurance;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $insurance = Insurance::inRandomOrder()->first();
        $doctor = Doctor::inRandomOrder()->first();

        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'date_of_birth' => $this->faker->date,
            'religion' => $this->faker->word,
            'occupation' => $this->faker->word,
            'address' => $this->faker->address,
            'phone_number' => $this->faker->unique()->phoneNumber,
            'email' => $this->faker->unique()->email,
            'identity_code' => $this->faker->uuid,
            'legal_representative_first_name' => $this->faker->firstName,
            'legal_representative_last_name' => $this->faker->lastName,
            'legal_representative_relationship' => $this->faker->word,
            'legal_representative_phone_number' => $this->faker->phoneNumber,
            'marital_status' => $this->faker->randomElement(MaritalStatus::all()),
            'status' => PatientStatus::ACTIVE,
            'insurance_id' => $insurance->id,
            'doctor_id' => $doctor->id,
        ];
    }
}
