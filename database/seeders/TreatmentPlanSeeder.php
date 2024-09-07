<?php

namespace Database\Seeders;

use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\TreatmentPlan;
use Illuminate\Database\Seeder;

class TreatmentPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patients = Patient::all();

        foreach ($patients as $patient) {
            TreatmentPlan::factory([
                'patient_id' => $patient->id,
            ])->create();
        }
    }
}
