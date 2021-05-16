<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BoletasProductos extends Model
{
    use HasFactory;

    protected $table = 'productos_boletas';
    protected $fillable = [
        'boleta',
        'producto',
        'cantidad'
    ];
    
    // Llave foranea
    public function boleta()
    {
        return $this->belongsTo("App\Models\Boletas", 'boleta');
    }

    public function producto()
    {
        return $this->belongsTo("App\Models\Productos", 'producto');
    }
}
