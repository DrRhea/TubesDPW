<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        // Membuat 10 data produk menggunakan factory
        Product::factory()->count(10)->create();
    }
}
