<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function getUser(Request $request){
        $id = $request['id'];
        $usuario = DB::select("SELECT u.*, d.nombre AS depart_name, tu.titulo AS titulo FROM users u INNER JOIN departamentos d ON u.departamento = d.id INNER JOIN tipo_user tu ON u.tipo_usuario = tu.id WHERE u.id = '".$id."';");
        $response['data'] = $usuario[0];
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
            $insert['nombre'] = $request['nombres'];
            $insert['apellido'] = $request['apellidos'];
            $insert['correo'] = $request['correo'];
            $insert['password'] = Crypt::encrypt($request['password']);
            $insert['dni'] = $request['dni'];
            $insert['celular'] = $request['celular'];
            $insert['telefono'] = $request['telefono'];
            $insert['tipo_usuario'] = $request['tipo_usuario'];
            $insert['departamento'] = $request['departamento'];
            $insert['sueldo_bruto'] = $request['sueldo_bruto'];
            
            if ($request->hasFile('avatar')){
                $file = $request->file('avatar');
                $path = 'uploads/';
                $filename = time().'-'.$file->getClientOriginalName();
                $subidaExitosa = $request->file('avatar')->move($path, $filename);
                $insert['avatar'] = $path.$filename;
            }

            User::insert($insert);

            $response['message'] = 'Usuario Registrado';
            $response['success'] = true;
            $response['status'] = 200;
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
            $response['status'] = 400;
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
    
    public function comprobarUser(Request $request){
        $correo = $request['correo'];
        $password = Crypt::encrypt($request['password']);
        $response = $this->userLogin($correo, $password);

        $resp['validate'] = $response['data'] !== null ? true : false;
        return $resp;
    }

    public function obtenerLevel(Request $request){
        $correo = strtolower($request['correo']);
        $id = $request['id'];
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
