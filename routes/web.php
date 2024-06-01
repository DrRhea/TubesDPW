<?php

use App\Http\Controllers\AdminProductController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EquipmentController;
use App\Http\Controllers\Auth\LoginController;

Route::get('/', function () {
    return Inertia::render('Home', []);
});

Route::get('/product', [EquipmentController::class, 'index']);
Route::get('/product/{category}/{id}', [EquipmentController::class, 'show']);

Route::get('/about', function () {
    return Inertia::render('About', []);
});
Route::get('/blog', function () {
    return Inertia::render('Blog', []);
});
Route::get('/contact', function () {
    return Inertia::render('Contact', []);
});

Route::get('/dashboard/product', [AdminProductController::class, 'index']);
Route::get('/dashboard/product/create', function () {
    return Inertia::render('Admin/CreateEquipmentForm', [AdminProductController::class, 'create']);
});
Route::post('/equipment/store', [AdminProductController::class, 'store']);


Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard', []);
})->middleware('auth'); 
// Route::get('/dashboard/login', [LoginController::class, 'showLoginForm'])->name('login');
// Route::post('/dashboard/login', [LoginController::class, 'login']);
// Route::post('/logout', [LoginController::class, 'logout'])->name('logout');


Route::fallback(function () {
    return Inertia::render('NotFound');
});

require __DIR__.'/auth.php';