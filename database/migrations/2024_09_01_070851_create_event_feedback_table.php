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
        Schema::create('medical_event_feedback', function (Blueprint $table) {
            $table->id();
            $table->unsignedTinyInteger('overall_quality')->comment('Overall quality of the event (1-5)');
            $table->unsignedTinyInteger('meet_expectations')->comment('Event met expectations (1-5)');
            $table->text('useful_topics')->nullable()->comment('Most useful topics');
            $table->unsignedTinyInteger('material_quality')->comment('Quality of presented materials (1-5)');
            $table->boolean('schedule_convenience')->comment('Schedule convenience (Yes/No)');
            $table->unsignedTinyInteger('organization_quality')->comment('Quality of event organization (1-5)');
            $table->text('fav_sessions')->nullable()->comment('Favorite sessions');
            $table->unsignedTinyInteger('speaker_competence')->comment('Competence of speakers (1-5)');
            $table->text('disappointed_sessions')->nullable()->comment('Sessions or speakers that were disappointing');
            $table->foreignId('medical_event_id')->constrained()->onDelete('cascade');
            $table->foreignId('doctor_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_feedback');
    }
};
