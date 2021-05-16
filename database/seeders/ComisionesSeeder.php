<?php

namespace Database\Seeders;

use App\Models\Comisiones;
use Illuminate\Database\Seeder;

class ComisionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $comision = new Comisiones();
        $comision->nombre = 'AFP';
        $comision->cantidad = 1.25;
        $comision->save();
        
        $comision2 = new Comisiones();
        $comision2->nombre = 'Asignación Familiar';
        $comision2->cantidad = 10;
        $comision2->save();
        
        $comision3 = new Comisiones();
        $comision3->nombre = 'IGV';
        $comision3->cantidad = 18;
        $comision3->save();
    }
}
