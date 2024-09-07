<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\DoctorNotification;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DoctorNotificationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $doctors = Doctor::all();
        $notifications = [];

        $currentMonth = Carbon::now()->month;

        for ($day = 1; $day <= Carbon::now()->daysInMonth; $day++) {
            $currentDate = Carbon::create(null, $currentMonth, $day, 0, 0, 0);

            foreach ($doctors as $doctor) {

                DoctorNotification::factory()->create([
                    'doctor_id' => $doctor->id,
                    'created_at' => $currentDate,
                    'updated_at' => $currentDate,
                ]);
            }
        }
    }
}
