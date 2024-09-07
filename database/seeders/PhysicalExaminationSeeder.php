<?php

namespace Database\Seeders;

use App\Models\PatientManagement\Patient;
use App\Models\PatientManagement\PhysicalExamination;
use Illuminate\Database\Seeder;

class PhysicalExaminationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patients = Patient::all();

        foreach ($patients as $patient) {
            PhysicalExamination::factory([
                'patient_id' => $patient->id,
            ])->create();
        }
    }
}
