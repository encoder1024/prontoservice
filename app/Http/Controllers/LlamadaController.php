<?php

namespace App\Http\Controllers;

use App\Llamada;
use Illuminate\Http\Request;

class LlamadaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $llamadas = Llamada::all();
        
        return view('web.XXXXXXX', compact('llamadas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Llamada  $llamada
     * @return \Illuminate\Http\Response
     */
    public function show(Llamada $llamada)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Llamada  $llamada
     * @return \Illuminate\Http\Response
     */
    public function edit(Llamada $llamada)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Llamada  $llamada
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Llamada $llamada)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Llamada  $llamada
     * @return \Illuminate\Http\Response
     */
    public function destroy(Llamada $llamada)
    {
        //
    }
}
