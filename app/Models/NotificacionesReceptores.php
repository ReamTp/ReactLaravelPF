<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NotificacionesReceptores extends Model
{
    use HasFactory;
    protected $table = 'notificaciones_receptores';
    protected $fillable = [
        'notificacion',
        'receptor'
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
