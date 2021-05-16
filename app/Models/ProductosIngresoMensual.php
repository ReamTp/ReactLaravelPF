<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductosIngresoMensual extends Model
{
    use HasFactory;

    protected $table = 'productos_boletas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'producto',
        'fecha',
        'cantidad_ingreso'
    ];

    // Llave foranea
    public function producto()
    {
        return $this->belongsTo("App\Models\Productos", 'producto');
    }
}
