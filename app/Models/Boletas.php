<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Boletas extends Model
{
    use HasFactory;

    protected $table = 'boletas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre_empresa',
        'direccion',
        'ruc',
        'fecha',
        'total'
    ];
}
