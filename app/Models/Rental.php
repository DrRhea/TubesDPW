<?php

namespace App\Models;

use App\Models\Equipment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rental extends Model
{
    use HasFactory;

    protected $fillable = [
        'equipment_id',
        'user_id',
        'duration',
        'total_price',
        'notes',
        'status'
    ];

    public function equipment()
    {
        return $this->belongsTo(Equipment::class);
    }
}
