<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('departments')->insert([
            ['name' => 'Internal Medicine'],
            ['name' => 'Pediatrics'],
            ['name' => 'Obstetrics and Gynecology (OB/GYN)'],
            ['name' => 'Dermatology'],
            ['name' => 'Orthopedics'],
            ['name' => 'Ophthalmology'],
            ['name' => 'ENT (Ear, Nose, and Throat)'],
            ['name' => 'Cardiology'],
            ['name' => 'Gastroenterology'],
            ['name' => 'Neurology'],
            ['name' => 'Psychiatry'],
            ['name' => 'Physical Therapy'],
            ['name' => 'Radiology'],
            ['name' => 'Laboratory'],
            ['name' => 'Pharmacy'],
            ['name' => 'Nutrition and Dietetics'],
            ['name' => 'Pulmonology'],
            ['name' => 'Endocrinology'],
            ['name' => 'Urology'],
            ['name' => 'Emergency Medicine'],
        ]);
    }
}

