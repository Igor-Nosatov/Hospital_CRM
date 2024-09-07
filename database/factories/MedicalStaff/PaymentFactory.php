<?php

namespace Database\Factories\MedicalStaff;

use App\Enums\CurrencyType;
use App\Enums\PaymentStatus;
use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MedicalStaff\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $doctor = Doctor::inRandomOrder()->first();
        $patient = $doctor->patients()->inRandomOrder()->first();

        return [
            'amount' => $this->faker->numberBetween(100, 700),
            'payment_date' => $this->faker->dateTimeThisMonth()->format('Y-m-d'),
            'payment_status' => $this->faker->randomElement(PaymentStatus::all()),
            'payment_method' => $this->faker->creditCardType(),
            'transaction_id' => $this->faker->uuid(),
            'card_expiry_date' => $this->faker->creditCardExpirationDate()->format('Y-m-d'),
            'comments' => $this->faker->sentence(),
            'currency' => CurrencyType::USD,
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
        ];
    }
}

