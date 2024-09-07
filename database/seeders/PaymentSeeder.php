<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\Payment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Payment::factory()->count(1000)->create();
    }
}
