<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CapacitacionesUsuarios extends Model
{
    use HasFactory;

    protected $table = 'capacitaciones_users';
    protected $fillable = [
        'capacitacion',
        'usuario'
    ];

    public $timestamps = false;
    
    // Llave foranea
    public function capacitacion()
    {
        return $this->belongsTo("App\Models\Capacitaciones", 'capacitacion');
    }

    public function usuario()
    {
        return $this->belongsTo("App\Models\User", 'usuario');
    }
}
