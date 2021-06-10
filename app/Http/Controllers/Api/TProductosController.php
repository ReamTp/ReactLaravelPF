<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TipoProductos;
use Illuminate\Http\Request;

class TProductosController extends Controller
{
    function create(Request $request){
        try {
            $tProduct = new TipoProductos();
            $tProduct->nombre = $request['nombre'];
            $tProduct->estado = isset($request['estado']) ? $request['estado'] : true;
            $tProduct->save();

            $response['message'] = 'Tipo de Producto Creado';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = true;
        }

        return $response;
    }

    function get(Request $request){
        try {
            $tProduct = TipoProductos::find($request['id']);

            $response['data'] = $tProduct;
            $response['success'] = true;
        } catch (\Exception $e){
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listar(){
        try {
            $data = TipoProductos::all();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listarA(){
        try {
            $data = TipoProductos::where('estado', true)->get();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listarD(){
        try {
            $data = TipoProductos::where('estado', false)->get();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function update(Request $request){
        try{
            $tProduct = TipoProductos::find($request['id']);

            $result = $tProduct->fill($request->all())->save();

            $response['message'] = 'Tipo de Producto Actualizado';
            $response['success'] = $result;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function activar(Request $request) {
        $request['estado'] = true;

        try{
            $mark = TipoProductos::find($request['id']);
            $result = $mark->fill($request->all())->save();

            $response['message'] = 'Tipo de Producto Activado';
            $response['success'] = $result;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function desactivar(Request $request) {
        $request['estado'] = false;

        try{
            $mark = TipoProductos::find($request['id']);
            $result = $mark->fill($request->all())->save();

            $response['message'] = 'Tipo de Producto Desactivado';
            $response['success'] = $result;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
