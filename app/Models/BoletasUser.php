<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoletasUser extends Model
{
    use HasFactory;

    protected $table = 'boletas_user';
    protected $primaryKey = 'id';
    protected $fillable = [
        'empleado',
        'sueldo',
        'encargado'
    ];

    // Llave foranea
    public function empleado()
    {
        return $this->belongsTo("App\Models\User", 'empleado');
    }

    public function encargado()
    {
        return $this->belongsTo("App\Models\User", 'encargado');
    }

    public $timestamps = false;
}
