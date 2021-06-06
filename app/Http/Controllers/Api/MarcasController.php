<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Marcas;
use Illuminate\Http\Request;

class MarcasController extends Controller
{
    function createMark(Request $request){
        try{
            $marca = new Marcas();
            $marca->nombre = $request['nombre'];
            $marca->descripcion = $request['descripcion'];
            $marca->estado = isset($request['estado']) ? $request['estado'] : true;
            $marca->save();

            $response['message'] = "Marca Insertada Correctamente";
            $response['success'] = true;
        } catch(\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function updateMark(Request $request){
        try{
            $mark = Marcas::find($request['id']);
            $result = $mark->fill($request->all())->save();

            $response['message'] = 'Marca Actualizada';
            $response['success'] = $result;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getMark(Request $request){
        try{
            $mark = Marcas::find($request['id']);

            $response['data'] = $mark;
            $response['success'] = true;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getMarks(){
        try{
            $data = Marcas::all();

            $response['data'] = $data;
            $response['success'] = true;
        }catch(\Exception $e){
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getMarksA(){
        try{
            $data = Marcas::where('estado', true)->get();

            $response['data'] = $data;
            $response['success'] = true;
        }catch(\Exception $e){
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getMarksD(){
        try{
            $data = Marcas::where('estado', false)->get();

            $response['data'] = $data;
            $response['success'] = true;
        }catch(\Exception $e){
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function deactiveMark(Request $request){
        $request['estado'] = false;

        try{
            $mark = Marcas::find($request['id']);
            $result = $mark->fill($request->all())->save();

            $response['message'] = 'Marca Desactivada';
            $response['success'] = $result;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function activeMark(Request $request){
        $request['estado'] = true;

        try{
            $mark = Marcas::find($request['id']);
            $result = $mark->fill($request->all())->save();

            $response['message'] = 'Marca Activada';
            $response['success'] = $result;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
