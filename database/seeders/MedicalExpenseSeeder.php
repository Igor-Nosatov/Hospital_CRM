<?php

namespace Database\Seeders;

use App\Models\MedicalStaff\MedicalExpense;
use Illuminate\Database\Seeder;

class MedicalExpenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MedicalExpense::factory()->count(10000)->create();
    }
}
