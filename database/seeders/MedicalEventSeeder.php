<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\MedicalEvent;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MedicalEventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $medicalEvents = [];

        $currentMonth = Carbon::now()->month;

        for ($day = 1; $day <= Carbon::now()->daysInMonth; $day++) {
            $currentDate = Carbon::create(null, $currentMonth, $day, 0, 0, 0);

            MedicalEvent::factory()->create([
                'created_at' => $currentDate,
                'updated_at' => $currentDate,
            ]);
        }
    }
}


