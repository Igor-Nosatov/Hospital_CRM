<?php

use App\Enums\MaritalStatus;
use App\Enums\PatientStatus;
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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth');
            $table->string('religion');
            $table->string('occupation');
            $table->string('address');
            $table->string('phone_number')->nullable()->unique();
            $table->string('email')->nullable()->unique();
            $table->string('identity_code')->unique();
            $table->string('legal_representative_first_name');
            $table->string('legal_representative_last_name');
            $table->string('legal_representative_relationship');
            $table->string('legal_representative_phone_number');
            $table->enum('marital_status', MaritalStatus::all())->default(MaritalStatus::SINGLE);
            $table->enum('status', PatientStatus::all())->default(PatientStatus::ACTIVE);
            $table->foreignId('insurance_id')->nullable()->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->nullable()->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['first_name', 'last_name','date_of_birth', 'address']);
        });

    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('patients');
    }
};
