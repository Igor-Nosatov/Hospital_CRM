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
        Schema::table('doctors', function (Blueprint $table) {
            $table->string('education')->nullable();
            $table->string('experience')->nullable();
            $table->string('languages')->nullable();
            $table->string('current_location')->nullable();
            $table->json('certifications')->nullable();
            $table->json('medical_license')->nullable();
            $table->json('professional_memberships')->nullable();
            $table->json('awards')->nullable();
            $table->json('publications')->nullable();
            $table->json('research_interests')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('doctors', function (Blueprint $table) {
            $table->dropColumn('education');
            $table->dropColumn('experience');
            $table->dropColumn('languages');
            $table->dropColumn('current_location');
            $table->dropColumn('certifications');
            $table->dropColumn('medical_license');
            $table->dropColumn('professional_memberships');
            $table->dropColumn('awards');
            $table->dropColumn('publications');
            $table->dropColumn('research_interests');
        });
    }
};
