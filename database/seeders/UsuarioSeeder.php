<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->nombre = 'Omar Enrique';
        $user->apellido = 'Castañeda Rogriguez';
        $user->correo = 'omar@omar.com';
        $user->password = Crypt::encrypt('12345678');
        $user->dni = 75214874;
        $user->celular = 987415421;
        $user->telefono = 5412354;
        $user->tipo_usuario = 1;
        $user->departamento = null;
        $user->sueldo_bruto = 25000;
        $user->save();

        $user2 = new User();
        $user2->nombre = 'Marco Jesus';
        $user2->apellido = 'Portilla Martinez';
        $user2->correo = 'marco@marco.com';
        $user2->password = Crypt::encrypt('12345678');
        $user2->dni = 87454874;
        $user2->celular = 954175421;
        $user2->telefono = 2314354;
        $user2->tipo_usuario = 2;
        $user2->departamento = 1;
        $user2->sueldo_bruto = 7000;
        $user2->save();

        $user3 = new User();
        $user3->nombre = 'Rafael Elias';
        $user3->apellido = 'Arriaga Mendoza';
        $user3->correo = 'ream_tp@outlook.com';
        $user3->password = Crypt::encrypt('12345678');
        $user3->dni = 74027083;
        $user3->celular = 956271174;
        $user3->telefono = 2541475;
        $user3->tipo_usuario = 3;
        $user3->departamento = 2;
        $user3->sueldo_bruto = 5000;
        $user3->save();

        $user4 = new User();
        $user4->nombre = 'Gian Carlo';
        $user4->apellido = 'Fernandez Carranza';
        $user4->correo = 'gian@gian.com';
        $user4->password = Crypt::encrypt('12345678');
        $user4->dni = 75421848;
        $user4->celular = 98744714;
        $user4->telefono = 3564178;
        $user4->tipo_usuario = 4;
        $user4->departamento = 1;
        $user4->sueldo_bruto = 3000;
        $user4->save();

        $user5 = new User();
        $user5->nombre = 'Jim Roger';
        $user5->apellido = 'Marrufo Chirinos';
        $user5->correo = 'jim@jim.com';
        $user5->password = Crypt::encrypt('12345678');
        $user5->dni = 19054120;
        $user5->celular = 95624141;
        $user5->telefono = 2556415;
        $user5->tipo_usuario = 5;
        $user5->departamento = 2;
        $user5->sueldo_bruto = 3000;
        $user5->save();
    }
}
