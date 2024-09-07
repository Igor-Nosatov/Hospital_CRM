<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Enums\AppointmentStatus;
use App\Enums\AppointmentType;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\MedicalService;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class AppointmentFactory extends Factory
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

        /** @var \App\Models\PatientManagement\Patient|null $patient */
        $patient = $doctor->patients()->inRandomOrder()->first();

        /** @var \App\Models\MedicalStaff\MedicalService|null $medicalService */
        $medicalService = MedicalService::inRandomOrder()->first();

        $startDate = Carbon::now()->subDays(20);
        $endDate = Carbon::now();
        $randomDateTime = Carbon::createFromTimestamp(mt_rand($startDate->timestamp, $endDate->timestamp));

        $startDateTime = $randomDateTime->setTime(
            $this->faker->numberBetween(8, 19),
            $this->faker->numberBetween(0, 60),
            $this->faker->numberBetween(0, 60),
            $this->faker->numberBetween(0, 60),
        );

        return [
            'appointment_datetime' => $startDateTime,
            'reason' => $this->faker->sentence,
            'symptoms' => $this->faker->paragraph,
            'notes' => $this->faker->paragraph,
            'status' => AppointmentStatus::ACTIVE,
            'type' => $this->faker->randomElement(AppointmentType::all()),
            'reminder_datetime' => $startDateTime->copy()->subDay(),
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
            'medical_service_id' => $medicalService->id,
        ];
    }
}
