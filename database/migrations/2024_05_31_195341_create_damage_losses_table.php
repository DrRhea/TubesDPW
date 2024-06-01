<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDamageLossesTable extends Migration
{
    public function up()
    {
        Schema::create('damage_losses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('equipment_id')->constrained()->onDelete('cascade');
            $table->text('description');
            $table->text('action')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('damage_losses');
    }
}
