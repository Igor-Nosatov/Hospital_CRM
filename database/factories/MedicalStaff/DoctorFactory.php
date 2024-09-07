<?php

namespace Database\Factories\MedicalStaff;

use App\Enums\DoctorStatus;
use App\Enums\MaritalStatus;
use App\Enums\WorkingMode;
use App\Models\Auth\Role;
use App\Models\Auth\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\MedicalStaff\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'working_mode' => $this->faker->randomElement(WorkingMode::all()),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'date_of_birth' => $this->faker->date,
            'religion' => $this->faker->word,
            'address' => $this->faker->address,
            'phone_number' => $this->faker->unique()->phoneNumber,
            'home_number' => $this->faker->unique()->phoneNumber,
            'other_phone_number' => $this->faker->unique()->phoneNumber,
            'marital_status' => $this->faker->randomElement(MaritalStatus::all()),
            'status' => DoctorStatus::ACTIVE,
            'biography' => $this->faker->paragraph,
            'education' => [$this->faker->sentence, $this->faker->sentence],
            'experience' => [$this->faker->sentence, $this->faker->sentence],
            'languages' => [$this->faker->languageCode, $this->faker->languageCode],
            'current_location' => [$this->faker->city, $this->faker->city],
            'certifications' => [$this->faker->sentence, $this->faker->sentence],
            'medical_license' => [$this->faker->sentence, $this->faker->sentence],
            'professional_memberships' => [$this->faker->company, $this->faker->company],
            'awards' => [$this->faker->sentence, $this->faker->sentence],
            'publications' => [$this->faker->sentence, $this->faker->sentence],
            'research_interests' => [$this->faker->word, $this->faker->word],
            'speciality_id' => $this->faker->numberBetween(1, 60),
            'department_id' => $this->faker->numberBetween(1, 15),
            'country_id' => $this->faker->numberBetween(1, 90),
            'user_id' => $this->getOrCreateUserId(),
        ];
    }

    /**
     * Get or create a User ID.
     *
     * @return int
     */
    private function getOrCreateUserId(): int
    {
        $adminRole = Role::where('name', 'admin')->firstOrFail();
        $doctorRole = Role::where('name', 'doctor')->firstOrFail();

        $userTitle = config('testing.USER_FOR_TESTING', 'Default Admin');
        $userEmail = config('testing.USER_EMAIL_FOR_TESTING', 'admin@example.com');
        $userPassword = config('testing.USER_PASSWORD_FOR_TESTING', 'password');

        $userCount = User::count();

        if ($userCount === 0) {
            $user = User::create([
                'name' => $userTitle,
                'email' => $userEmail,
                'password' => Hash::make($userPassword),
                'role_id' => $adminRole->id,
            ]);
        } else {
            $user = User::create([
                'name' => $this->faker->name(),
                'email' => $this->faker->unique()->safeEmail(),
                'password' => Hash::make('password'),
                'role_id' => $doctorRole->id,
            ]);
        }

        return $user->id;
    }
}
