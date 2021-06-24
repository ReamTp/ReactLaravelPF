<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('documentos', function (Blueprint $table) {
        //     $table->id();
        //     $table->unsignedBigInteger('creador');
        //     $table->foreign('creador')->references('id')->on('users');
        //     $table->unsignedBigInteger('departamento');
        //     $table->foreign('departamento')->references('id')->on('departamentos');
        //     $table->unsignedBigInteger('tipo_documento');
        //     $table->foreign('tipo_documento')->references('id')->on('tipo_documentos');
        //     $table->date('fecha');
        //     $table->timestamps();
        // });

        // if (Schema::hasTable('documentos')) {
        //     DB::statement("ALTER TABLE documentos ADD archivo MEDIUMBLOB");
        // }
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documentos');
    }
}
