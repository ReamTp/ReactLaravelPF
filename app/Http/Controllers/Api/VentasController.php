<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Boletas;
use App\Models\BoletasProductos;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    function get(Request $request){
        try {
            $ventas = Boletas::find($request['id']);
            $productos = BoletasProductos::where('boleta', $request['id'])->get();
            $ventas['productos'] = $productos;

            $response['data'] = $ventas;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listar(){
        try {
            $data = Boletas::all();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getProducts(Request $request){
        try {
            $productos = DB::select("SELECT p.id, p.nombre, p.precio_unit, pb.cantidad, ROUND(p.precio_unit * pb.cantidad, 2) AS total FROM productos_boletas pb, productos p WHERE pb.producto = p.id AND pb.boleta = ".$request['id'].";");

            $response['data'] = $productos;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
