<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCampingPackageEquipmentTable extends Migration
{
    public function up()
    {
        Schema::create('camping_package_equipment', function (Blueprint $table) {
            $table->id();
            $table->foreignId('camping_package_id')->constrained()->onDelete('cascade');
            $table->foreignId('equipment_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('camping_package_equipment');
    }
}