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
        $departamentos->nombre = 'Global';
        $departamentos->descripcion = 'Gerente General de la empresa';
        $departamentos->save();

        $departamentos2 = new Departamentos();
        $departamentos2->nombre = 'Administracion y Finanzas';
        $departamentos2->descripcion = 'Departamento de que se encarga de la Administración y las Finanzas de la empresa';
        $departamentos2->save();

        $departamentos3 = new Departamentos();
        $departamentos3->nombre = 'Capital Humano';
        $departamentos3->descripcion = 'Departamento que se encarga los contratos de los empleados y obreros de la empresa';
        $departamentos3->save();
    }
}
