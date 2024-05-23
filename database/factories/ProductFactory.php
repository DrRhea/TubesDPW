<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    protected $model = \App\Models\Product::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->paragraph(),
            'category' => $this->faker->randomElement(['Tent', 'Backpack', 'Sleeping Bag', 'Cookware']),
            'price_per_day' => $this->faker->randomFloat(2, 10, 100),
            'status' => $this->faker->randomElement(['available', 'unavailable']),
            'image_url' => $this->faker->imageUrl(640, 480, 'camping', true),
        ];
    }
}