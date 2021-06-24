<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReceptoresNotificaciones extends Model
{
    use HasFactory;

    protected $table = 'receptores_notificaciones';
    protected $fillable = [
        'notificacion',
        'receptor',
        'leido',
        'mostrar'
    ];

    public $timestamps = false;

    public function notificacion() {
        return $this->belongsTo("App\Models\Notificaciones", 'notificacion');
    }

    public function receptor() {
        return $this->belongsTo("App\Models\User", 'receptor');
    }
}
