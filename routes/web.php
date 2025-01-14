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

Route::get('/', 'FrontEndController@index');

//Route::get('/stock', 'CategoriaController@index');

Route::resource('categorias', 'CategoriaController');

Route::resource('grupos', 'GrupoController');

Route::resource('localidads', 'LocalidadController');

Route::resource('prestadors', 'PrestadorController');

Route::resource('provincias', 'ProvinciaController');

Route::resource('servicios', 'ServicioController');

Route::resource('servicioprestadors', 'ServicioPrestadorController');

Route::resource('llamadas', 'LlamadaController');

Auth::routes();

Route::get('/stock', 'HomeController@index')->name('home');