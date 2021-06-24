<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoletasUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('boletas_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('empleado');
            $table->foreign('empleado')->references('id')->on('users');
            $table->bigInteger('sueldo');
            $table->unsignedBigInteger('encargado');
            $table->foreign('encargado')->references('id')->on('users');
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
        Schema::dropIfExists('boletas_user');
    }
}
