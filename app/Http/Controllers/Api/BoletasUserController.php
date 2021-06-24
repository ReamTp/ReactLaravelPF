<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BoletasUser;
use App\Models\Notificaciones;
use App\Models\ReceptoresNotificaciones;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BoletasUserController extends Controller
{
    function create(Request $request) {
        $fecha = new DateTime();

        try {
            $ventas = new BoletasUser();
            $ventas->empleado = $request['empleado'];
            $ventas->sueldo = $request['sueldo_neto'];
            $ventas->encargado = $request['encargado'];
            $ventas->save();

            $not = new Notificaciones();
            $not->emisor = $request['encargado'];
            $not->tipo = "1";
            $not->fecha = $fecha->format('Y-m-d');
            $not->save();

            $receptores = [1, 3];

            foreach($receptores as $receptor) {
                $rnot = new ReceptoresNotificaciones();
                $rnot->notificacion = $not->id;
                $rnot->receptor = $receptor;
                $rnot->save();
            }

            $response['message'] = "Nuevo Pago Registrado";
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function infoEmpleado() {
        try {
            $empleados = DB::select('SELECT id, nombre, apellido, sueldo_bruto FROM users;');

            $response['data'] = $empleados;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function listar(){
        try {
            $data = DB::select('SELECT bu.id, u2.id id_empleado, u.nombre empleado, bu.sueldo, u2.nombre encargado, u2.correo FROM boletas_user bu, users u, users u2 WHERE bu.empleado = u.id AND bu.encargado = u2.id ORDER BY bu.id DESC;');

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
