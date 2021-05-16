<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificacionesReceptoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notificaciones_receptores', function (Blueprint $table) {
            $table->unsignedBigInteger('notificacion');
            $table->foreign('notificacion')->references('id')->on('notificaciones');
            $table->unsignedBigInteger('receptor');
            $table->foreign('receptor')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notificaciones_receptores');
    }
}
