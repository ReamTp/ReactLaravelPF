<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;

    protected $table = 'productos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'nombre',
        'marca',
        'tipo_producto',
        'stock',
        'peso_unit',
        'precio_unit',
        'estado'
    ];

    // Llave foranea
    public function marca()
    {
        return $this->belongsTo("App\Models\Marca", 'marca');
    }

    public function tipoProducto()
    {
        return $this->belongsTo("App\Models\TipoProductos", 'tipo_producto');
    }
}
