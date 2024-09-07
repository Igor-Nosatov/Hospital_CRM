<?php

use App\Enums\DoctorStatus;
use App\Enums\MaritalStatus;
use App\Enums\WorkingMode;
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
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->enum('working_mode', WorkingMode::all())->default(WorkingMode::ONLINE);
            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth');
            $table->string('religion')->nullable();
            $table->string('address');
            $table->string('phone_number')->unique()->nullable();
            $table->string('home_number')->nullable();
            $table->string('other_phone_number')->nullable()->unique();
            $table->enum('marital_status', MaritalStatus::all())->default(MaritalStatus::SINGLE);
            $table->enum('status', DoctorStatus::all())->default(DoctorStatus::ACTIVE);
            $table->text('biography')->nullable();
            $table->foreignId('speciality_id')->constrained('specialities')->onDelete('cascade');
            $table->foreignId('department_id')->constrained()->onDelete('cascade');
            $table->foreignId('country_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
