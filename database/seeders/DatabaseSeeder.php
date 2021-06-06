<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ComisionesSeeder::class);
        $this->call(DepartamentosSeeder::class);
        $this->call(TipoUsuarioSeeder::class);
        $this->call(UsuarioSeeder::class);
        $this->call(TipoNotificacionesSeeder::class);
        $this->call(MarcasSeeder::class);
        $this->call(TProductsSeeder::class);
        $this->call(ProductsSeeder::class);
    }
}
