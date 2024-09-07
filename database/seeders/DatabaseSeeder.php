<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
            InsuranceSeeder::class,
            MedicalServiceSeeder::class,
            CountrySeeder::class,
            DepartmentSeeder::class,
            SpecialitySeeder::class,
            SettingSeeder::class,
            DoctorSeeder::class,
            DiagnosesSeeder::class,
            MedicalEventSeeder::class,
            MedicalEventAgendaSeeder::class,
            PatientSeeder::class,
            DoctorReviewSeeder::class,
            AppointmentSeeder::class,
            PatientVisitSeeder::class,
            DoctorNotificationSeeder::class,
            MeetingSeeder::class,
            PatientMedicalTestFactory::class,
            PatientHistorySeeder::class,
            PhysicalExaminationSeeder::class,
            TreatmentPlanSeeder::class,
            PaymentSeeder::class,
            MedicalExpenseSeeder::class,
            HelpDeskSeeder::class,
            PatientDocSeeder::class,
        ]);
    }
}
