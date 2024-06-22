<?php

namespace App\Http\Controllers;

use App\Models\Rental;
use Illuminate\Http\Request;

class RentalController extends Controller
{
    public function rental(Request $request)
    {
        Rental::create([
            'equipment_id' => $request->equipment_id,
            'user_id' => $request->user_id,
            'duration' => $request->duration,
            'total_price' => $request->total_price,
            'notes' => $request->notes,
            'status' => $request->status
        ]);

        return redirect()->route('return');
    }

    public function balikin(Request $request)
    {
        // Mengambil ID rental dari request
        $rentalId = $request->input('id');

        // Mencari booking berdasarkan ID
        $rental = Rental::find($rentalId);

        if (!$rental) {
            // Handle jika rental tidak ditemukan
            return response()->json(['error' => 'Rental not found'], 404);
        }

        // Update status rental menjadi 'returned'
        $rental->status = 'returned';
        $rental->save();
    }
}
