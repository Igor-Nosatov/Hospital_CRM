<?php

use App\Enums\MedicalExpenseType;
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
        Schema::create('medical_expenses', function (Blueprint $table) {
            $table->id();
            $table->enum('medical_expense_type', MedicalExpenseType::all())->default(MedicalExpenseType::CONSULTATION);
            $table->integer('amount');
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
        Schema::dropIfExists('medical_expenses');
    }
};
