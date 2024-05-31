<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        // 'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        // 'laravelVersion' => Application::VERSION,
        // 'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/contact', function () {
    return Inertia::render('Contact', []);
});
Route::get('/product', function () {
    return Inertia::render('Product', []);
});
Route::get('/product/1', function () {
    return Inertia::render('ProductDetails', []);
});
Route::get('/product/tents', function () {
    // return Inertia::render('Product', []);
});
Route::get('/package', function () {
    return Inertia::render('Package', []);
});
Route::get('/about', function () {
    return Inertia::render('About', []);
});
Route::get('/blog', function () {
    return Inertia::render('Blog', []);
});

Route::get('/admin', function () {
    return Inertia::render('Admin/Dashboard', []);
});

Route::fallback(function () {
    return Inertia::render('NotFound');
});

Route::resource('/', ProductController::class);

require __DIR__.'/auth.php';
