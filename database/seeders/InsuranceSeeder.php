<?php

namespace Database\Seeders;

use App\Models\PatientManagement\Insurance;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InsuranceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Insurance::factory()->count(100)->create();
    }
}
