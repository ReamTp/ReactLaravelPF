<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notificaciones extends Model
{
    use HasFactory;

    protected $table = 'notificaciones';
    protected $primaryKey = 'id';
    protected $fillable = [
        'emisor',
        'tipo',
        'fecha'
    ];

    // Llave foranea
    public function emisor()
    {
        return $this->belongsTo("App\Models\User", 'emisor');
    }

    public function tipo()
    {
        return $this->belongsTo("App\Models\TipoNotificaciones", 'tipo');
    }
}
