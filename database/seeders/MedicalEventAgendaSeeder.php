<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\MedicalEventAgenda;
use Illuminate\Database\Seeder;

class MedicalEventAgendaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       MedicalEventAgenda::factory()->count(1000)->create();
    }
}
