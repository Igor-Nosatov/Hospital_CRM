<?php

namespace Database\Seeders;

use App\Models\PatientManagement\PatientMedicalTest;
use Illuminate\Database\Seeder;

class PatientMedicalTestFactory extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PatientMedicalTest::factory()->count(10000)->create();
    }
}
