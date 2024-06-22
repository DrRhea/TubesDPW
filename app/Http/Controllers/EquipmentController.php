<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Inertia\Inertia;
use App\Models\Equipment;
use Illuminate\Http\Request;
use App\Models\EquipmentCategory;

class EquipmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Equipment::all();
        $categories = EquipmentCategory::all();

        return Inertia::render('Product', [
            'equipment' => $products,
            'equipment_categories' => $categories
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
    public function show($id)
    {
        $equipment = Equipment::findOrFail($id);
        $categories = EquipmentCategory::findOrFail($equipment->category_id);
        $user = auth()->user();

        return Inertia::render('ProductDetails', [
            'equipment' => $equipment,
            'categories' => $categories,
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Equipment $equipment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Equipment $equipment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Equipment $equipment)
    {
        //
    }

    public function admin_product() {
        
        $products = Equipment::all();
        $categories = EquipmentCategory::all();

        return Inertia::render('Admin/Dashboard', [
            'url' => 'products',
            'equipment' => $products,
            'equipment_categories' => $categories
        ]);
    }
}
