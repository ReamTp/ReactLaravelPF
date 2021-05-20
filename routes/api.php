<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/user/listar', [UserController::class, 'listar']);

Route::post('/user/login', [UserController::class, 'loginUser']);

Route::put('/user/update', [UserController::class, 'updateUser']);

Route::post('/user/datos', [UserController::class, 'getUser']);

Route::post('/user/comprobar', [UserController::class, 'comprobarUser']);

Route::post('/user/registrar', [UserController::class, 'registrarUser']);

Route::post('/user/level', [UserController::class, 'obtenerLevel']);
