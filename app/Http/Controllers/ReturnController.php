<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use Inertia\Inertia;
use App\Models\Rental;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReturnController extends Controller
{

    public function index()
    {
        $user = Auth::user();
        $rentals = Rental::where('user_id', $user->id)
            ->with('equipment')
            ->get();

        return Inertia::render('Return', [
            'rentals' => $rentals,
        ]);
    }
}
