<?php

namespace Database\Seeders;

use App\Models\PatientManagement\Appointment;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Appointment::factory()->count(1000)->create();
    }
}
