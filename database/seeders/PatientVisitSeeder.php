<?php

namespace Database\Seeders;

use App\Models\PatientManagement\PatientVisit;
use Illuminate\Database\Seeder;

class PatientVisitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PatientVisit::factory()->count(1000)->create();
    }
}
