<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
Route::get('/tareas', 'TareaController@index')->name('tareas.index');
Route::post('/tareas', 'TareaController@store')->name('tareas.store');

Route::match(['put', 'patch'], '/tareas/{id}', 'TareaController@update')->name('tareas.update');
Route::delete('/tareas/{id}', 'TareaController@destroy')->name('tareas.destroy');
*/