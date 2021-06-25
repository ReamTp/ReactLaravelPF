<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Capacitaciones;
use App\Models\Notificaciones;
use App\Models\ReceptoresNotificaciones;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CapacitacionesController extends Controller
{
    function create(Request $request) {
        try {
            $capacitacion = new Capacitaciones();
            $capacitacion->titulo = $request['titulo'];
            $capacitacion->descripcion = $request['descripcion'];
            $capacitacion->fecha = $request['fecha'];
            $capacitacion->hora_inicio = $request['hora_inicio'];
            $capacitacion->hora_fin = $request['hora_fin'];
            $capacitacion->organizador = $request['organizador'];
            $capacitacion->save();

            $participantes = $request['participantes'];

            $fecha = new DateTime();

            $not = new Notificaciones();
            $not->emisor = $request['organizador'];
            $not->tipo = "3";
            $not->fecha = $fecha->format('Y-m-d');
            $not->save();

            foreach($participantes as $participante) {
                $rnot = new ReceptoresNotificaciones();
                $rnot->notificacion = $not->id;
                $rnot->receptor = $participante;
                $rnot->save();
            }

            $response['message'] = "Capacitación Creada";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listar(){
        try {
            $data = Capacitaciones::orderBy('id', 'DESC')->get();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getUsers($id){
        try {
            $data = DB::select('SELECT id, nombre, apellido FROM users WHERE id != '.$id.';');

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function desactivar(Request $request){
        try{
            $capacitacion = Capacitaciones::find($request['id']);
            $result = $capacitacion->update(['estado' => false]);

            $response['message'] = 'Capacitacion Cancelada';
            $response['success'] = $result;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
