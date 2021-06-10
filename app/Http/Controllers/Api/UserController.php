<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getUser(Request $request){
        $user = User::with('tipoUsuario', 'departamento')->find($request['id']);

        $response['data'] = $user;
        $response['data']->password = Crypt::decrypt($response['data']->password);
        return $response;
    }

    public function loginUser(Request $request){
        $correo = strtolower($request['email']);
        $password = $request['password'];
        $response = $this->userLogin($correo, $password);
        return $response;
    }

    public function registrarUser(Request $request){
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
            $user->save();

            $response['message'] = 'Usuario Registrado';
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    public function listar(){
        try{
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function listarA(){
        try{
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->where('estado', true)->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function listarD(){
        try{
            // Obtener datos con clave foranea
            $data = User::with('tipoUsuario', 'departamento')->where('estado', false)->get();

            $response['data'] = $data;
            $response['message'] = 'Carga Completa';
            $response['success'] = true;
        } catch (\Exception $e){
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }

    public function comprobarUser(Request $request){
        $correo = $request['correo'];
        $password = $request['password'];
        $response = $this->userLogin($correo, $password);

        $resp['validate'] = $response['data'] !== null ? true : false;
        return $resp;
    }

    public function obtenerLevel(Request $request){
        $id = $request['id'];
        $correo = strtolower($request['correo']);
        $password = $request['password'];

        $data = DB::select("SELECT tipo_usuario, password FROM users WHERE id = '".$id."' AND correo = '".$correo."'");

        if(Crypt::decrypt($data[0]->password) == $password){
            $response['level'] = $data[0]->tipo_usuario;
        } else {
            $response['level'] = null;
        }
        return $response;
    }

    public function updateUser(Request $request){
        $request['password'] = Crypt::encrypt($request['password']);

        $user = User::find($request['id']);
        $result = $user->fill($request->all())->save();

        if($result){
            $response['datos'] = $result;
            $response['message'] = 'Datos Actualizados';
            $response['success'] = true;
        } else {
            $response['message'] = 'Error';
            $response['success'] = false;
        }

        return $response;
    }

    public function desactivarUser(Request $request){
        $request['estado'] = false;

        $user = User::find($request['id']);
        $result = $user->fill($request->all())->save();

        if($result){
            $response['message'] = 'Usuario Desactivado';
            $response['success'] = $result;
        } else {
            $response['message'] = 'Error';
            $response['message'] = $result;
        }

        return $response;
    }

    public function activarUser(Request $request){
        $request['estado'] = true;

        $user = User::find($request['id']);
        $result = $user->fill($request->all())->save();

        if($result){
            $response['message'] = 'Usuario Activado';
            $response['success'] = $result;
        } else {
            $response['message'] = 'Error';
            $response['message'] = $result;
        }

        return $response;
    }

    private function userLogin($correo, $password){
        try {
            // Realizar Consulta a la Base de datos
            $data = DB::table('users')->where('correo', $correo)->first();
            // Comprobar si existe informacion y si la contraseña encriptada es igual
            // que la contraseña ingresada
            if($data && Crypt::decrypt($data->password) == $password){
                $datos = ['id' => $data->id, 'correo' => $data->correo, 'password' => Crypt::decrypt($data->password)];
                $response['data'] = $datos;
                $response['message'] = 'Carga Completa';
                $response['success'] = true;
                $response['status'] = 200;
            } else {
                $response['data'] = null;
                $response['message'] = 'Error Datos incorrectos';
                $response['success'] = false;
                $response['status'] = 400;
            }

        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
            $response['status'] = 400;
        }
        return $response;
    }
}
