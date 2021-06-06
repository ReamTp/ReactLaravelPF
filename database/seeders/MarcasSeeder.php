<?php

namespace Database\Seeders;

use App\Models\Marcas;
use Illuminate\Database\Seeder;

class MarcasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $marca = new Marcas();
        $marca->nombre = 'CamFrut';
        $marca->descripcion = 'Productos que son de la familia de frutas de Camposol Viru';
        $marca->save();

        $marca2 = new Marcas();
        $marca2->nombre = 'Camposol Enlatado';
        $marca2->descripcion = 'Productos que son de la familia de productos de esparragos de Camposol';
        $marca2->save();
    }
}
