<?php

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
        Schema::create('patient_medical_tests', function (Blueprint $table) {
            $table->id();
            $table->date('date_of_medical_analysis');
            $table->string('title');
            $table->string('file_path');
            $table->string('disk')->default('local');
            $table->string('mime_type');
            $table->string('file_hash', 64)->unique();
            $table->string('collection')->nullable();
            $table->unsignedBigInteger('size');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('patient_tests');
    }
};
