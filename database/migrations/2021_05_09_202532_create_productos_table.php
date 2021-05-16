<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->unsignedBigInteger('marca');
            $table->foreign('marca')->references('id')->on('marcas');
            $table->unsignedBigInteger('tipo_producto');
            $table->foreign('tipo_producto')->references('id')->on('tipo_productos');
            $table->integer('stock');
            $table->double('peso_unit');
            $table->double('precio_unit');
            $table->boolean('estado')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
