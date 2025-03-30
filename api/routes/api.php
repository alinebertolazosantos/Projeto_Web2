<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

#Funções get
Route::get('/user/index', [UsuarioController::class, 'index']);
Route::get('/user/show/{id}',[ UsuarioController::class, 'show']);

#Funções post
Route::post('/user/store', [UsuarioController::class, 'store']);
