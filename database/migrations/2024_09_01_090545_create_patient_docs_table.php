<?php

use App\Enums\PatientDocType;
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
        Schema::create('patient_docs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->enum('document_type', PatientDocType::all())->default(PatientDocType::DISEASE_HISTORY);
            $table->string('document_name');
            $table->string('mime_type');
            $table->string('path');
            $table->string('disk')->default('local');
            $table->string('file_hash', 500)->unique();
            $table->string('collection')->nullable();
            $table->unsignedBigInteger('size');
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patient_docs');
    }
};


