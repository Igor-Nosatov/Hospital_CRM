<?php

use App\Enums\MedicalEventType;
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
        Schema::create('medical_events', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('organizer');
            $table->date('event_date');
            $table->enum('medical_event_type', MedicalEventType::all())->default(MedicalEventType::ONLINE);
            $table->string('language');
            $table->string('url_img')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_events');
    }
};
