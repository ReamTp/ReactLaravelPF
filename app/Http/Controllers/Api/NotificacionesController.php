<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notificaciones;
use App\Models\ReceptoresNotificaciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificacionesController extends Controller
{
    function create(Request $request){
        try {
            $not = new Notificaciones();
            $not->emisor = $request['emisor'];
            $not->tipo = $request['tipo'];
            $not->fecha = $request['fecha'];
            $not->save();

            $receptores = $request['receptores'];

            foreach($receptores as $receptor) {
                $rnot = new ReceptoresNotificaciones();
                $rnot->notificacion = $not->id;
                $rnot->receptor = $receptor;
                $rnot->save();
            }

            $response['message'] = 'Notificación Correspondiente Enviada';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listar($id){
        try{
            $data = DB::select("SELECT n.id, u.nombre, u.apellido, n.fecha, tn.mensaje, rn.leido FROM notificaciones n, users u, tipo_notificaciones tn, receptores_notificaciones rn WHERE n.emisor = u.id AND
            n.tipo = tn.id AND rn.mostrar = true AND n.id = rn.notificacion AND rn.receptor = ".$id.";");

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function marcarLeida(Request $request){
        try{
            $not = ReceptoresNotificaciones::where('notificacion','=',$request['id'])->where('receptor', '=', $request['idR']);
            $result = $not->update(['leido'=> true]);

            $response['message'] = 'Notificación marcada como leída';
            $response['success'] = $result;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function marcarLeidos(Request $request){
        try{
            $nots = ReceptoresNotificaciones::where('leido', '=', false)->where('receptor','=', $request['id']);
            $result = $nots->update(['leido' => true]);

            $response['message'] = 'Notificaciones marcadas como leídas';
            $response['success'] = $result;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function noMostrar(Request $request){
        try{
            $nots = ReceptoresNotificaciones::where('receptor','=', $request['id'])->where('mostrar','=', true);
            $result = $nots->update(['mostrar' => false]);

            $response['message'] = 'Notificaciones Borradas';
            $response['success'] = $result;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
