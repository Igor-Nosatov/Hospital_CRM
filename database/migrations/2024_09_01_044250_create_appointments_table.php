<?php

use App\Enums\AppointmentStatus;
use App\Enums\AppointmentType;
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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->dateTime('appointment_datetime');
            $table->text('reason');
            $table->text('symptoms');
            $table->text('notes')->nullable();
            $table->enum('status', AppointmentStatus::all())->default(AppointmentStatus::ACTIVE);
            $table->enum('type', AppointmentType::all())->default(AppointmentType::ONLINE);
            $table->dateTime('reminder_datetime');
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['appointment_datetime', 'doctor_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
