<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\Doctor;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Doctor::factory()->count(100)->create();
    }
}
