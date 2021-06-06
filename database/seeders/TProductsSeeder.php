<?php

namespace Database\Seeders;

use App\Models\TipoProductos;
use Illuminate\Database\Seeder;

class TProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tProduct = new TipoProductos();
        $tProduct->nombre = 'Alcachofas';
        $tProduct->save();

        $tProduct2 = new TipoProductos();
        $tProduct2->nombre = 'Esparragos';
        $tProduct2->save();

        $tProduct3 = new TipoProductos();
        $tProduct3->nombre = 'Palta';
        $tProduct3->save();

        $tProduct4 = new TipoProductos();
        $tProduct4->nombre = 'Arandanos';
        $tProduct4->save();
    }
}
