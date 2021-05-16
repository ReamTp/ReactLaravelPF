<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documentos extends Model
{
    use HasFactory;

    protected $table = 'documentos';
    protected $primaryKey = 'id';
    protected $fillable = [
        'creador',
        'departamento',
        'tipo_documento',
        'fecha',
        'archivo'
    ];

    // Llave foranea
    public function creador()
    {
        return $this->belongsTo("App\Models\User", 'creador');
    }

    public function departamento()
    {
        return $this->belongsTo("App\Models\Departamentos", 'departamento');
    }

    public function tipoDocumento()
    {
        return $this->belongsTo("App\Models\TipoDocumentos", 'tipo_documento');
    }
}
