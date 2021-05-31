<?php

namespace Database\Seeders;

use App\Models\TipoNotificaciones;
use Illuminate\Database\Seeder;

class TipoNotificacionesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tNotificaciones = new TipoNotificaciones();
        $tNotificaciones->nombre = 'Pagos';
        $tNotificaciones->mensaje = 'Se a realizado un pago a un Empleado';
        $tNotificaciones->save();

        $tNotificaciones2 = new TipoNotificaciones();
        $tNotificaciones2->nombre = 'Registro';
        $tNotificaciones2->mensaje = 'Se a realizado un registrado a un Empleado';
        $tNotificaciones2->save();
    }
}
