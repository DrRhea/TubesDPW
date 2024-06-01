<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Equipment;
use Illuminate\Http\Request;


class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Equipment::all();

        return Inertia::render('Admin/Product', [
            'equipment' => $products
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
        $request->validate([
            'name'   => 'required',
            'description' => 'required',
            'rental_price_per_day' => 'required',
            'purchase_price' => 'required',
            'availability_status' => 'required',
            'category_id' => 'required',
            'brand' => 'required',
        ]);

        //create post
        Equipment::create([
            'name'   => $request->name,
            'description' => $request->description,
            'rental_price_per_day' => $request->rental_price_per_day,
            'purchase_price' => $request->purchase_price,
            'availability_status' => $request->availability_status,
            'category_id' => $request->category_id,
            'brand' => $request->brand
        ]);

        //redirect
        return Inertia::visit(route('Admin/Product'))->with('success', 'Data Berhasil Disimpan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
