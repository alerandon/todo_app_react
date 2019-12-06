<?php

use Illuminate\Database\Seeder;
use App\Tareas;

class TareasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Tareas::class, 40)->create();
    }
}
