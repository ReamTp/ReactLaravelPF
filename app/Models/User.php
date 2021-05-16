<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $fillable = [
        'nombre',
        'apellidos',
        'correo',
        'password',
        'dni',
        'celular',
        'telefono',
        'tipo_usuario',
        'departamento',
        'sueldo_bruto',
        'estado'
    ];

    // Llave foranea
    public function tipoUsuario()
    {
        return $this->belongsTo('App\Models\TipoUsuario', 'tipo_usuario');
    }

    public function departamento()
    {
        return $this->belongsTo("App\Models\Departamentos", 'departamento');
    }
}
