<?php

use App\Enums\MedicationTiming;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('treatment_plans', function (Blueprint $table) {
            $table->id();
            $table->string('medicament_name');
            $table->string('medication_dosage');
            $table->string('medication_frequency');
            $table->enum('medication_timing', MedicationTiming::all())->default(MedicationTiming::AFTER_MEAL);
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('treatment_plans');
    }
};
