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
        'documento',
        'emisor',
        'fecha',
        'hora',
        'leido'
    ];

    // Llave foranea
    public function documento()
    {
        return $this->belongsTo("App\Models\Documentos", 'documento');
    }

    public function emisor()
    {
        return $this->belongsTo("App\Models\User", 'emisor');
    }
}
