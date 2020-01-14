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

// Vue Router '/v/'
Route::middleware('auth')->get('/v/{any?}', function (){
    return view('vue');
})->where('any', '[\/\w\.-]*');

*/

Auth::routes();

// Index
Route::get('/', 'IndexController@index');

// HomeController->auth
Route::middleware('auth')->get('/home', 'HomeController@index');

