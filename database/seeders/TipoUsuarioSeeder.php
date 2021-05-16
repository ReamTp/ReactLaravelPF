<?php

namespace Database\Seeders;

use App\Models\TipoUsuario;
use Illuminate\Database\Seeder;

class TipoUsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tUser = new TipoUsuario();
        $tUser->titulo = 'Gerente General';
        $tUser->descripcion = 'Gerente de toda la empresa se encarga de administrar y supervisar todo lo de la empresa';
        $tUser->save();

        $tUser2 = new TipoUsuario();
        $tUser2->titulo = 'Gerente del Departamento Administracion y Finanzas';
        $tUser2->descripcion = 'Gerente del departamento de Administracion y Finanzas se encarga de supervisar todo lo que ocurre en el departamento';
        $tUser2->save();

        $tUser3 = new TipoUsuario();
        $tUser3->titulo = 'Gerente del Departamento Capital Humano';
        $tUser3->descripcion = 'Gerente del departamento de Capital Humano se encarga de supervisar todo lo que ocurre en el departamento';
        $tUser3->save();

        $tUser4 = new TipoUsuario();
        $tUser4->titulo = 'Empleado del Departamento Administracion y Finanzas';
        $tUser4->descripcion = 'Empleado que labora en el departamento de administración y finanzas, se encarga administrar o financiar de las actividades del departamento';
        $tUser4->save();

        $tUser5 = new TipoUsuario();
        $tUser5->titulo = 'Empleado del Departamento Capital Humano';
        $tUser5->descripcion = 'Empleado que labora en el departamento de Capital Humano, se encarga de reclutar nuevos empleados y todo lo relacionado con RRHH.';
        $tUser5->save();
    }
}
