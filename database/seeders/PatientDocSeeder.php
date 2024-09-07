<?php

namespace Database\Seeders;

use App\Models\PatientManagement\PatientDoc;
use Illuminate\Database\Seeder;

class PatientDocSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PatientDoc::factory()->count(1000)->create();
    }
}
