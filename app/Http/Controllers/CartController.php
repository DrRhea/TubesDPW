<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $cart = Cart::where('user_id', $user->id)->get();
        $equipmentIds = $cart->pluck('equipment_id'); // Mendapatkan array dari equipment_id

        // Sekarang Anda memiliki array equipment_id yang dapat digunakan untuk mengambil data equipment
        $equipment = Equipment::whereIn('id', $equipmentIds)->get();

        return Inertia::render('Checkout', [
            'equipment' => $equipment,
            'cart' => $cart,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }

    public function addToCart(Request $request)
    {
        $request->validate([
            'equipment_id' => 'required|exists:equipment,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = Cart::where('user_id', auth()->id())
        ->where('equipment_id', $request->equipment_id)
        ->first();

        if ($cartItem) {
            // Jika item sudah ada di cart, tambahkan jumlahnya
            $cartItem->increment('quantity', $request->quantity);
        } else {
            // Jika item belum ada di cart, buat entri baru
            Cart::create([
                'user_id' => auth()->id(),
                'equipment_id' => $request->equipment_id,
                'quantity' => $request->quantity
            ]);
        }

        return redirect()->back()->with('success', 'Item added to cart successfully');
    }

    public function addToRent(Request $request)
    {
        $request->validate([
            'equipment_id' => 'required|exists:equipment,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = Cart::where('user_id', auth()->id())
        ->where('equipment_id', $request->equipment_id)
        ->first();

        if ($cartItem) {
            // Jika item sudah ada di cart, tambahkan jumlahnya
            $cartItem->increment('quantity', $request->quantity);
        } else {
            // Jika item belum ada di cart, buat entri baru
            Cart::create([
                'user_id' => auth()->id(),
                'equipment_id' => $request->equipment_id,
                'quantity' => $request->quantity
            ]);
        }

        return redirect()->route('checkout');
    }
}
