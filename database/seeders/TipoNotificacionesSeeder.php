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

        $tNotificaciones3 = new TipoNotificaciones();
        $tNotificaciones3->nombre = 'Capacitacion';
        $tNotificaciones3->mensaje = 'Se te asignó una nueva capacitación';
        $tNotificaciones3->save();
    }
}
