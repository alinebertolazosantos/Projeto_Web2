<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuarioController;

Route::prefix('user')->group(function () {
    // GET
    Route::get('/index', [UsuarioController::class, 'index']);
    Route::get('/show/{id}', [UsuarioController::class, 'show']);

    // POST
    Route::post('/store', [UsuarioController::class, 'store']);

    // PUT
    Route::put('/update/{id}', [UsuarioController::class, 'update']);
   
    // DELETE
    Route::delete('/destroy/{id}', [UsuarioController::class, 'destroy']);
});
