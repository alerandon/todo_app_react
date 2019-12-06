<?php

use Illuminate\Database\Seeder;
use App\Tareas;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TareasTableSeeder::class);
    }
}
