<?php

use App\Enums\PharmacyStatus;
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
        Schema::create('pharmacies', function (Blueprint $table) {
            $table->id();
            $table-> string('name');
            $table->string('address');
            $table->string('phone');
            $table->string('email');
            $table->string('gps_coordinates');
            $table->string('working_modes');
            $table->enum('status', PharmacyStatus::all())->default(PharmacyStatus::ACTIVE);
            $table->foreignId('organization_id')->constrained()->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pharmacies');
    }
};
