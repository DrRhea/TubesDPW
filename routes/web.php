<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\ReturnController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EquipmentController;

Route::get('/', function () {
    return Inertia::render('Home', []);
})->name('home');

Route::get('/product', [EquipmentController::class, 'index'])->name('product');
Route::get('/product/details/{id}', [EquipmentController::class, 'show'])
    ->middleware(['auth', 'verified']);
Route::post('/product/instant-checkout', [RentalController::class, 'rental'])
    ->middleware(['auth', 'verified']);
Route::post('/cart/add', [CartController::class, 'addToCart'])->middleware(['auth', 'verified']);
Route::post('/cart/rent', [CartController::class, 'addToRent'])->middleware(['auth', 'verified']);

Route::get('/return', [ReturnController::class, 'index'])->middleware(['auth', 'verified'])->name('return');
Route::post('/product/instant-return', [RentalController::class, 'balikin'])
    ->middleware(['auth', 'verified']);

Route::get('/cart', function () {
    return Inertia::render('CartPage', []);
});
Route::get('product/rental', [CartController::class, 'index'])->middleware(['auth', 'verified'])->name('checkout');

Route::get('/blog', function () {
    return Inertia::render('Blog', []);
});

Route::get('/about', function () {
    return Inertia::render('About', []);
});
Route::get('/contact', function () {
    return Inertia::render('Contact', []);
});
Route::get('/contact', [FAQController::class, 'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard', []);
})->middleware(['auth', 'verified']);
Route::get('/dashboard/product', [EquipmentController::class, 'admin_product'])->middleware(['auth', 'verified']);

// Route::fallback()

require __DIR__ . '/auth.php';
