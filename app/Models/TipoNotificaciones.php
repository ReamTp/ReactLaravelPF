<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoNotificaciones extends Model
{
    use HasFactory;
    protected $table = 'tipo_notificaciones';
    protected $id = 'id';
    protected $fillable = [
        'nombre',
        'mensaje'
    ];

    // Llave foranea
    public function notificacion()
    {
        return $this->belongsTo("App\Models\Notificaciones", 'notificacion');
    }

    public function receptor()
    {
        return $this->belongsTo("App\Models\User", 'receptor');
    }
}
