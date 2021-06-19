<?php

use App\Http\Controllers\Api\MarcasController;
use App\Http\Controllers\Api\ProductosController;
use App\Http\Controllers\Api\TProductosController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VentasController;
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

// Usuario
Route::post('/user/registrar', [UserController::class, 'registrarUser']);

Route::post('/user/comprobar', [UserController::class, 'comprobarUser']);

Route::post('/user/level', [UserController::class, 'obtenerLevel']);

Route::post('/user/login', [UserController::class, 'loginUser']);

Route::post('/user/datos', [UserController::class, 'getUser']);

Route::get('/user/listar', [UserController::class, 'listar']);

Route::get('/user/listara', [UserController::class, 'listarA']);

Route::get('/user/listard', [UserController::class, 'listarD']);

Route::put('/user/update', [UserController::class, 'updateUser']);

Route::put('/user/desactivar', [UserController::class, 'desactivarUser']);

Route::put('/user/activar', [UserController::class, 'activarUser']);

// Marcas
Route::post('/mark/crear', [MarcasController::class, 'createMark']);

Route::post('/mark/get', [MarcasController::class, 'getMark']);

Route::get('/mark/listar', [MarcasController::class, 'getMarks']);

Route::get('/mark/listara', [MarcasController::class, 'getMarksA']);

Route::get('/mark/listard', [MarcasController::class, 'getMarksD']);

Route::put('/mark/update', [MarcasController::class, 'updateMark']);

Route::put('/mark/desactivar', [MarcasController::class, 'deactiveMark']);

Route::put('/mark/activar', [MarcasController::class, 'activeMark']);

// Tipo de Productos
Route::post('/tproducts/crear', [TProductosController::class, 'create']);

Route::post('/tproducts/get', [TProductosController::class, 'get']);

Route::get('/tproducts/listar', [TProductosController::class, 'listar']);

Route::get('/tproducts/listara', [TProductosController::class, 'listarA']);

Route::get('/tproducts/listard', [TProductosController::class, 'listarD']);

Route::put('/tproducts/update', [TProductosController::class, 'update']);

Route::put('/tproducts/active', [TProductosController::class, 'activar']);

Route::put('/tproducts/deactive', [TProductosController::class, 'desactivar']);

// Productos
Route::post('/products/crear', [ProductosController::class, 'create']);

Route::post('/products/get', [ProductosController::class, 'get']);

Route::get('/products/listar', [ProductosController::class, 'listar']);

Route::get('/products/listara', [ProductosController::class, 'listarA']);

Route::get('/products/listard', [ProductosController::class, 'listarD']);

Route::put('/products/update', [ProductosController::class, 'update']);

Route::put('/products/activar', [ProductosController::class, 'activar']);

Route::put('/products/desactivar', [ProductosController::class, 'desactivar']);

// Ventas
Route::post('/sales/crear', [VentasController::class, 'create']);