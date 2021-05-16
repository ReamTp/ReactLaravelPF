<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoProductos extends Model
{
    use HasFactory;

    protected $table = 'tipo_productos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre',
        'estado'
    ];
}
