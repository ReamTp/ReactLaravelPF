<?php

namespace Database\Seeders;

use App\Models\Boletas;
use App\Models\BoletasProductos;
use DateTime;
use Illuminate\Database\Seeder;

class BoletasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fecha = new DateTime();

        $boletas = new Boletas();
        $boletas->nombre_empresa = "Empresa Generica 1";
        $boletas->direccion = "Direccion 1";
        $boletas->ruc = 7845784125;
        $boletas->fecha = $fecha->format('Y-m-d');
        $boletas->total = 784512.85;
        $boletas->save();

        $productos = [["producto"=>1, "cantidad"=>15], ["producto"=>2, "cantidad"=>15], ["producto"=>3, "cantidad"=>15]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas2 = new Boletas();
        $boletas2->nombre_empresa = "Empresa Generica 2";
        $boletas2->direccion = "Direccion 2";
        $boletas2->ruc = 7845784125;
        $boletas2->fecha = $fecha->format('Y-m-d');
        $boletas2->total = 894512.85;
        $boletas2->save();

        $productos = [["producto"=>1, "cantidad"=>2], ["producto"=>2, "cantidad"=>18]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas2->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas3 = new Boletas();
        $boletas3->nombre_empresa = "Empresa Generica 3";
        $boletas3->direccion = "Direccion 3";
        $boletas3->ruc = 7845784125;
        $boletas3->fecha = $fecha->format('Y-m-d');
        $boletas3->total = 654512.85;
        $boletas3->save();

        $productos = [["producto"=>1, "cantidad"=>22], ["producto"=>3, "cantidad"=>2]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas3->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas4 = new Boletas();
        $boletas4->nombre_empresa = "Empresa Generica 4";
        $boletas4->direccion = "Direccion 4";
        $boletas4->ruc = 7845784125;
        $boletas4->fecha = $fecha->format('Y-m-d');
        $boletas4->total = 214512.85;
        $boletas4->save();

        $productos = [["producto"=>1, "cantidad"=>35]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas4->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas5 = new Boletas();
        $boletas5->nombre_empresa = "Empresa Generica 5";
        $boletas5->direccion = "Direccion 5";
        $boletas5->ruc = 7845784125;
        $boletas5->fecha = $fecha->format('Y-m-d');
        $boletas5->total = 789812.85;
        $boletas5->save();

        $productos = [["producto"=>2, "cantidad"=>4], ["producto"=>3, "cantidad"=>2]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas5->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas6 = new Boletas();
        $boletas6->nombre_empresa = "Empresa Generica 6";
        $boletas6->direccion = "Direccion 6";
        $boletas6->ruc = 7845784125;
        $boletas6->fecha = $fecha->format('Y-m-d');
        $boletas6->total = 789812.85;
        $boletas6->save();

        $productos = [["producto"=>1, "cantidad"=>2], ["producto"=>3, "cantidad"=>3]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas6->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas7 = new Boletas();
        $boletas7->nombre_empresa = "Empresa Generica 7";
        $boletas7->direccion = "Direccion 7";
        $boletas7->ruc = 7845784125;
        $boletas7->fecha = $fecha->format('Y-m-d');
        $boletas7->total = 985812.85;
        $boletas7->save();

        $productos = [["producto"=>1, "cantidad"=>6], ["producto"=>2, "cantidad"=>8]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas7->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas8 = new Boletas();
        $boletas8->nombre_empresa = "Empresa Generica 8";
        $boletas8->direccion = "Direccion 8";
        $boletas8->ruc = 7845784125;
        $boletas8->fecha = $fecha->format('Y-m-d');
        $boletas8->total = 65812.85;
        $boletas8->save();

        $productos = [["producto"=>1, "cantidad"=>8]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas8->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas9 = new Boletas();
        $boletas9->nombre_empresa = "Empresa Generica 9";
        $boletas9->direccion = "Direccion 9";
        $boletas9->ruc = 7845784125;
        $boletas9->fecha = $fecha->format('Y-m-d');
        $boletas9->total = 1529812.85;
        $boletas9->save();

        $productos = [["producto"=>1, "cantidad"=>2], ["producto"=>2, "cantidad"=>22], ["producto"=>3, "cantidad"=>52]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas9->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }

        $boletas10 = new Boletas();
        $boletas10->nombre_empresa = "Empresa Generica 10";
        $boletas10->direccion = "Direccion 10";
        $boletas10->ruc = 7845784125;
        $boletas10->fecha = $fecha->format('Y-m-d');
        $boletas10->total = 335812.85;
        $boletas10->save();

        $productos = [["producto"=>1, "cantidad"=>56], ["producto"=>2, "cantidad"=>89], ["producto"=>3, "cantidad"=>52]];
        foreach ($productos as $producto) {
            $vBoleta = new BoletasProductos();
            $vBoleta->boleta = $boletas10->id;
            $vBoleta->producto = $producto['producto'];
            $vBoleta->cantidad = $producto['cantidad'];
            $vBoleta->save();
        }
    }
}
