<?php

namespace Database\Seeders;

use App\Models\PatientManagement\HelpDesk;
use Illuminate\Database\Seeder;

class HelpDeskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HelpDesk::factory()->count(1000)->create();
    }
}
