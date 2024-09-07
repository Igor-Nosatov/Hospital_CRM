<?php

use App\Enums\SettingStatus;
use App\Enums\SettingType;
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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('setting_name', 255);
            $table->enum('setting_status', SettingStatus::all())->default(SettingStatus::ENABLE);
            $table->enum('setting_type', SettingType::all())->default(SettingType::BILLING);
            $table->string('setting_desc');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
