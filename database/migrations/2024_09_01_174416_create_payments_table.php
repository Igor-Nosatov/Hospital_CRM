<?php

use App\Enums\CurrencyType;
use App\Enums\PaymentStatus;
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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('amount');
            $table->string('payment_date');
            $table->enum('payment_status', PaymentStatus::all())->default(PaymentStatus::PENDING);
            $table->string('payment_method');
            $table->string('transaction_id')->nullable();
            $table->string('card_expiry_date')->nullable();
            $table->text('comments')->nullable();
            $table->enum('currency', CurrencyType::all())->default(CurrencyType::USD);
            $table->foreignId('patient_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained('users')->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
