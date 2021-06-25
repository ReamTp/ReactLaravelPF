<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Departamentos;
use App\Models\Notificaciones;
use App\Models\ReceptoresNotificaciones;
use App\Models\TipoUsuario;
use App\Models\User;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getUser(Request $request)
    {
        $user = User::with('tipoUsuario', 'departamento')->find($request['id']);

        $response['data'] = $user;
        $response['data']->password = Crypt::decrypt($response['data']->password);
        return $response;
    }

    public function loginUser(Request $request)
    {
        $correo = strtolower($request['email']);
        $password = $request['password'];
        $response = $this->userLogin($correo, $password);
        $response['data'] = ["id" => $response['data']->id, "correo" => $response['data']->correo, "password" => $response['data']->password,];

        return $response;
    }

    public function registrarUser(Request $request)
    {
        $fecha = new DateTime();
        try {
            $user = new User();
            $user->nombre = $request['nombre'];
            $user->apellido = $request['apellido'];
            $user->correo = $request['correo'];
            $user->password = Crypt::encrypt($request['password']);
            $user->dni = $request['dni'];
            $user->celular = $request['celular'];
            $user->telefono = $request['telefono'];
            $user->tipo_usuario = $request['tipo_usuario'];
            $user->departamento = $request['departamento'];
            $user->sueldo_bruto = $request['sueldo_bruto'];
            $user->fecha = date('Y-m-d', strtotime($request['fecha']));
            $user->estado = $request['estado'] == 'true' ? true : false;
            $user->save();

            $not = new Notificaciones();
            $not->emisor = $request['encargado'];
            $not->tipo = "2";
            $not->fecha = $fecha->format('Y-m-d');
            $not->save();

            $receptores = [3, 5];

            foreach($receptores as $receptor) {
                $rnot = new ReceptoresNotificaciones();
                $rnot->notificacion = $not->id;
                $rnot->receptor = $receptor;
                $rnot->save();
            }

            $response['message'] = 'Usuario Registrado';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function listar()
    {
        try {
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function listarA()
    {
        try {
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->where('estado', true)->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function listarD()
    {
        try {
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->where('estado', false)->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function comprobarUser(Request $request)
    {
        $correo = $request['correo'];
        $password = $request['password'];
        $response = $this->userLogin($correo, $password);

        $resp['validate'] = $response['data'] !== null ? true : false;
        return $resp;
    }

    public function obtenerLevel(Request $request)
    {
        try {
            $id = $request['id'];
            $correo = strtolower($request['correo']);
            $password = $request['password'];

            $data = DB::select("SELECT tipo_usuario, password FROM users WHERE id = '" . $id . "' AND correo = '" . $correo . "'");

            if (Crypt::decrypt($data[0]->password) == $password) {
                $response['data'] = $data[0]->tipo_usuario;
            } else {
                $response['data'] = null;
            }
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function updateUser(Request $request)
    {
        $request['password'] = Crypt::encrypt($request['password']);

        $user = User::find($request['id']);
        $result = $user->fill($request->all())->save();

        if ($result) {
            $response['datos'] = $result;
            $response['message'] = 'Datos Actualizados';
            $response['success'] = true;
        } else {
            $response['message'] = 'Error';
            $response['success'] = false;
        }

        return $response;
    }

    public function desactivarUser(Request $request)
    {
        $user = User::find($request['id']);
        $result = $user->update(['estado' => false]);

        if ($result) {
            $response['message'] = 'Usuario Desactivado';
            $response['success'] = $result;
        } else {
            $response['message'] = 'Error';
            $response['message'] = $result;
        }

        return $response;
    }

    public function activarUser(Request $request)
    {
        $user = User::find($request['id']);
        $result = $user->update(['estado' => true]);

        if ($result) {
            $response['message'] = 'Usuario Activado';
            $response['success'] = $result;
        } else {
            $response['message'] = 'Error';
            $response['message'] = $result;
        }

        return $response;
    }

    private function userLogin($correo, $password)
    {
        try {
            // Realizar Consulta a la Base de datos
            $data = DB::table('users')->where('correo', $correo)->first();
            // Comprobar si existe informacion y si la contraseña encriptada es igual
            // que la contraseña ingresada
            if ($data && Crypt::decrypt($data->password) == $password) {
                $data->password = Crypt::decrypt($data->password);
                $response['data'] = $data;
                $response['message'] = 'Carga Completa';
                $response['success'] = true;
            } else {
                $response['data'] = null;
                $response['message'] = 'Error Datos incorrectos';
                $response['success'] = false;
            }
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    function getTipoUsuario() {
        try {
            $data = TipoUsuario::all();

            $response['data'] = $data;
            $response['success'] = false;
        } catch (\Exception $e) {
            $response['data'] = null;
            $response['success'] = false;
        }

        return $response;
    }

    function getDepartaments() {
        try {
            $data = Departamentos::all();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = null;
            $response['success'] = false;
        }

        return $response;
    }
}
