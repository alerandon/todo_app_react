<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/tareas', 'TareaController@index')->name('tareas.index');
Route::post('/tareas', 'TareaController@store')->name('tareas.store');

Route::match(['put', 'patch'], '/tareas/{id}', 'TareaController@update')->name('tareas.update');
Route::delete('/tareas/{id}', 'TareaController@delete')->name('tareas.delete');



