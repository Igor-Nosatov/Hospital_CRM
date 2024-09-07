<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\DoctorReview;
use Illuminate\Database\Seeder;

class DoctorReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DoctorReview::factory()->count(1000)->create();
    }
}
