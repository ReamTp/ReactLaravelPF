<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reportes extends Model
{
    use HasFactory;

    protected $table = 'reportes';
    protected $fillable = [
        'reporte',
        'tipo_reporte'
    ];

    public $timestamps = false;

    // Llave foranea
    public function reporte()
    {
        return $this->belongsTo("App\Models\Documentos", 'reporte');
    }

    public function tipoReporte()
    {
        return $this->belongsTo("App\Models\TipoReporte", 'tipo_reporte');
    }
}
