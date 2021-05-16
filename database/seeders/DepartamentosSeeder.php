<?php

namespace Database\Seeders;

use App\Models\Departamentos;
use Illuminate\Database\Seeder;

class DepartamentosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $departamentos = new Departamentos();
        $departamentos->nombre = 'Administracion y Finanzas';
        $departamentos->descripcion = 'Departamento de que se encarga de la Administración y las Finanzas de la empresa';
        $departamentos->save();

        $departamentos2 = new Departamentos();
        $departamentos2->nombre = 'Capital Humano';
        $departamentos2->descripcion = 'Departamento que se encarga los contratos de los empleados y obreros de la empresa';
        $departamentos2->save();
    }
}
