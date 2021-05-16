<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horarios extends Model
{
    use HasFactory;

    protected $table = 'horarios';
    protected $fillable = [
        'usuario',
        'hora_entrada',
        'hora_salida'
    ];

    // Llave foranea
    public function user()
    {
        return $this->belongsTo("App\Models\User", 'usuario');
    }
}
