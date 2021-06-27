<?php

namespace Database\Seeders;

use App\Models\BoletasUser;
use Illuminate\Database\Seeder;

class PagosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pagos1 = new BoletasUser();
        $pagos1->empleado = 1;
        $pagos1->sueldo = 25000;
        $pagos1->encargado = 3;
        $pagos1->save();

        $pagos2 = new BoletasUser();
        $pagos2->empleado = 2;
        $pagos2->sueldo = 7000;
        $pagos2->encargado = 3;
        $pagos2->save();

        $pagos3 = new BoletasUser();
        $pagos3->empleado = 3;
        $pagos3->sueldo = 5000;
        $pagos3->encargado = 3;
        $pagos3->save();

        $pagos4 = new BoletasUser();
        $pagos4->empleado = 4;
        $pagos4->sueldo = 3000;
        $pagos4->encargado = 3;
        $pagos4->save();

        $pagos5 = new BoletasUser();
        $pagos5->empleado = 5;
        $pagos5->sueldo = 3000;
        $pagos5->encargado = 3;
        $pagos5->save();
    }
}
