<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use Illuminate\Database\Eloquent\Factories\Factory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PatientManagement\Insurance>
 */
class InsuranceFactory extends Factory
{
    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'insurance_name' => $this->faker->company(),
            'policy_number' => $this->faker->unique()->randomNumber(6),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'policy_holder_name' => $this->faker->name(),
            'policy_holder_relationship' => $this->faker->word(),
            'contact_number' => $this->faker->phoneNumber(),
            'premium_amount' => $this->faker->numberBetween(100, 1000),
        ];
    }
}
