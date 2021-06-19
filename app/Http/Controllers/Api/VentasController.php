<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Boletas;
use App\Models\BoletasProductos;
use DateTime;
use Illuminate\Http\Request;

class VentasController extends Controller
{
    function create(Request $request) {
        $fecha = new DateTime();
        try {
            $ventas = new Boletas();
            $ventas->nombre_empresa = $request['nombre'];
            $ventas->direccion = $request['direccion'];
            $ventas->ruc = $request['ruc'];
            $ventas->fecha = $fecha->format('Y-m-d');
            $ventas->total = $request['total'];
            $ventas->save();

            $productos = $request['productos'];
            $response['product'] = $request['productos'];

            foreach ($productos as $producto) {
                $vBoleta = new BoletasProductos();
                $vBoleta->boleta = $ventas->id;
                $vBoleta->producto = $producto['producto'];
                $vBoleta->cantidad = $producto['cantidad'];
                $vBoleta->save();
            }

            $response['message'] = "Ventas Generada";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
