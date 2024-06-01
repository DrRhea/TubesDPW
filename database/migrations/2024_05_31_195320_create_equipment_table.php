<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEquipmentTable extends Migration
{
    public function up()
    {
        Schema::create('equipment', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->decimal('rental_price_per_day', 10, 2);
            $table->decimal('purchase_price', 10, 2)->nullable();
            $table->boolean('availability_status')->default(true);
            $table->foreignId('category_id')->constrained('equipment_categories');
            $table->string('brand');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('equipment');
    }
}
