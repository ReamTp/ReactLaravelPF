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
        $comision->porcentaje = 1.25;
        $comision->operacion = false;
        $comision->save();

        $comision2 = new Comisiones();
        $comision2->nombre = 'Asignación Familiar';
        $comision2->porcentaje = 10;
        $comision2->operacion = true;
        $comision2->save();

        $comision3 = new Comisiones();
        $comision3->nombre = 'IGV';
        $comision3->porcentaje = 18;
        $comision3->operacion = false;
        $comision3->save();
    }
}
