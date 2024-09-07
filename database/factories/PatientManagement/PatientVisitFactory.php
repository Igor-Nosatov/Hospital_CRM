<?php

declare(strict_types=1);

namespace Database\Factories\PatientManagement;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\Payment;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\Insurance;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientVisitFactory extends Factory
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

        $sixMonthsAgo = Carbon::now()->subMonths(6);
        $startDateTime = $this->faker->dateTimeBetween($sixMonthsAgo, 'now');

        $startDateTime = Carbon::instance($startDateTime)->setTime(
            $this->faker->numberBetween(8, 19),
            $this->faker->numberBetween(0, 59),
            $this->faker->numberBetween(0, 59),
            $this->faker->numberBetween(0, 999)
        );

        $reminderDatetime = $startDateTime->copy()->subDay();

        $insuranceId = Insurance::inRandomOrder()->first()->id;

        return [
            'complaints' => $this->faker->sentence(),
            'symptoms' => $this->faker->paragraph(),
            'treatment' => $this->faker->paragraph(),
            'notes' => $this->faker->paragraph(),
            'diagnose_id' => $this->faker->numberBetween(1, 45),
            'payment_id' => Payment::factory()->create()->id,
            'appointment_id' => Appointment::factory()->create([
                'appointment_datetime' =>(string) $startDateTime->format('Y-m-d H:i:s'),
                'reminder_datetime' =>(string) $reminderDatetime->format('Y-m-d H:i:s'),
            ])->id,
            'patient_id' => $patient->id,
            'doctor_id' => $doctor->id,
            'insurance_id' => $insuranceId,
        ];
    }
}
