<?php

namespace Database\Seeders;

use App\Models\PatientManagement\Meeting;
use Illuminate\Database\Seeder;

class MeetingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Meeting::factory()->count(3000)->create();
    }
}
