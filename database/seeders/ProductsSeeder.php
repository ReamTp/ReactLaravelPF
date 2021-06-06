<?php

namespace Database\Seeders;

use App\Models\Productos;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tProduct = new Productos();
        $tProduct->nombre = 'Alcachofa Camposol Enlatado Rojo';
        $tProduct->marca = 2;
        $tProduct->tipo_producto = 1;
        $tProduct->stock = 15654;
        $tProduct->peso_unit = 1.200;
        $tProduct->precio_unit = 15.70;
        $tProduct->save();

        $tProduct2 = new Productos();
        $tProduct2->nombre = 'Esparragos Camposol Enlatado Azul';
        $tProduct2->marca = 2;
        $tProduct2->tipo_producto = 2;
        $tProduct2->stock = 25654;
        $tProduct2->peso_unit = 0.958;
        $tProduct2->precio_unit = 10.70;
        $tProduct2->save();

        $tProduct3 = new Productos();
        $tProduct3->nombre = 'Arandanos CamFrut Puente Viru';
        $tProduct3->marca = 1;
        $tProduct3->tipo_producto = 4;
        $tProduct3->stock = 22785;
        $tProduct3->peso_unit = 0.496;
        $tProduct3->precio_unit = 16.60;
        $tProduct3->save();
    }
}
