<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'rental_price_per_day',
        'purchase_price',
        'avaibility_status',
        'category_id',
        'brand',
    ];
}
