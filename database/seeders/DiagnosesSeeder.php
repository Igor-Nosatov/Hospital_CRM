<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiagnosesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('diagnoses')->insert([
            ['name' => 'Hypertension', 'code' => 'I10'],
            ['name' => 'Coronary Artery Disease', 'code' => 'I25'],
            ['name' => 'Heart Failure', 'code' => 'I50'],
            ['name' => 'Myocardial Infarction', 'code' => 'I21'],
            ['name' => 'Stroke', 'code' => 'I63'],
            ['name' => 'Atrial Fibrillation', 'code' => 'I48'],
            ['name' => 'Peripheral Artery Disease', 'code' => 'I73'],
            ['name' => 'Endocarditis', 'code' => 'I33'],
            ['name' => 'Cardiomyopathy', 'code' => 'I42'],
            ['name' => 'Aortic Aneurysm', 'code' => 'I71'],
            ['name' => 'Pulmonary Embolism', 'code' => 'I26'],
            ['name' => 'Deep Vein Thrombosis', 'code' => 'I82'],
            ['name' => 'Hypertensive Heart Disease', 'code' => 'I11'],
            ['name' => 'Pericarditis', 'code' => 'I30'],
            ['name' => 'Valvular Heart Disease', 'code' => 'I08'],
            ['name' => 'Rheumatic Heart Disease', 'code' => 'I09'],
            ['name' => 'Arrhythmogenic Right Ventricular Dysplasia', 'code' => 'I34'],
            ['name' => 'Brugada Syndrome', 'code' => 'I45'],
            ['name' => 'Long QT Syndrome', 'code' => 'I47'],
            ['name' => 'Short QT Syndrome', 'code' => 'I49'],
            ['name' => 'Wolff-Parkinson-White Syndrome', 'code' => 'I51'],
            ['name' => 'Atrial Flutter', 'code' => 'I52'],
            ['name' => 'Ventricular Tachycardia', 'code' => 'I53'],
            ['name' => 'Ventricular Fibrillation', 'code' => 'I54'],
            ['name' => 'Bundle Branch Block', 'code' => 'I55'],
            ['name' => 'Sick Sinus Syndrome', 'code' => 'I56'],
            ['name' => 'Hypertrophic Cardiomyopathy', 'code' => 'I57'],
            ['name' => 'Dilated Cardiomyopathy', 'code' => 'I58'],
            ['name' => 'Restrictive Cardiomyopathy', 'code' => 'I59'],
            ['name' => 'Ischemic Cardiomyopathy', 'code' => 'I60'],
            ['name' => 'Takotsubo Cardiomyopathy', 'code' => 'I61'],
            ['name' => 'Non-compaction Cardiomyopathy', 'code' => 'I62'],
            ['name' => 'Cardiac Tamponade', 'code' => 'I64'],
            ['name' => 'Dressler Syndrome', 'code' => 'I65'],
            ['name' => 'Kawasaki Disease', 'code' => 'I66'],
            ['name' => 'Moyamoya Disease', 'code' => 'I67'],
            ['name' => 'Pulmonary Hypertension', 'code' => 'I68'],
            ['name' => 'Ventricular Septal Defect', 'code' => 'I69'],
            ['name' => 'Atrial Septal Defect', 'code' => 'I70'],
            ['name' => 'Patent Foramen Ovale', 'code' => 'I72'],
            ['name' => 'Patent Ductus Arteriosus', 'code' => 'I74'],
            ['name' => 'Tetralogy of Fallot', 'code' => 'I75'],
            ['name' => 'Transposition of the Great Arteries', 'code' => 'I76'],
            ['name' => 'Ebstein Anomaly', 'code' => 'I77'],
            ['name' => 'Hypoplastic Left Heart Syndrome', 'code' => 'I78'],
            ['name' => 'Coarctation of the Aorta', 'code' => 'I79'],
        ]);
    }
}
