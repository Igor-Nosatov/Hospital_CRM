<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MedicalServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('medical_services')->insert([
            ['name' => 'Consultations', 'price' => 50],
            ['name' => 'Prescriptions', 'price' => 20],
            ['name' => 'Specialized Care', 'price' => 100],
            ['name' => 'Dermatology', 'price' => 80],
            ['name' => 'Psychiatry and Psychology', 'price' => 120],
            ['name' => 'Cardiology', 'price' => 150],
            ['name' => 'Endocrinology', 'price' => 120],
            ['name' => 'Chronic Disease Management', 'price' => 100],
            ['name' => 'Diabetes Care', 'price' => 90],
            ['name' => 'Hypertension Management', 'price' => 90],
            ['name' => 'COPD Management', 'price' => 80],
            ['name' => 'Acute Care', 'price' => 70],
            ['name' => 'Minor Illnesses', 'price' => 60],
            ['name' => 'Injury Care', 'price' => 80],
            ['name' => 'Pediatric Care', 'price' => 70],
            ['name' => 'Routine Check-ups', 'price' => 60],
            ['name' => 'Parental Guidance', 'price' => 50],
            ['name' => 'Physical Therapy', 'price' => 80],
            ['name' => 'Occupational Therapy', 'price' => 80],
            ['name' => 'Preventive Care', 'price' => 70],
            ['name' => 'Health Screenings', 'price' => 60],
            ['name' => 'Lifestyle Counseling', 'price' => 70],
            ['name' => 'Remote Monitoring', 'price' => 50],
            ['name' => 'Health Education', 'price' => 40],
            ['name' => 'Second Opinions', 'price' => 80],
            ['name' => 'Specialized Telemedicine Services', 'price' => 100],
            ['name' => 'Telepathology', 'price' => 90],
            ['name' => 'Teleradiology', 'price' => 90],
            ['name' => 'Teleophthalmology', 'price' => 80],
            ['name' => 'Teletriage', 'price' => 70],
            ['name' => 'Stroke Care', 'price' => 150],
        ]);
    }
}
