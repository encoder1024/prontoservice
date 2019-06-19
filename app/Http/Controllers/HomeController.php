<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categoria;
use App\Grupo;
use App\StockPedido;
use App\Llamada;
use Illuminate\Container\Container;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $categorias = Categoria::all();
        $grupos = Grupo::all();
        $stocks = StockPedido::all();
        $llamadas = Llamada::orderBy('created_at', 'desc')->get();
        
        return view('web.dashboard', compact('categorias', 'grupos', 'stocks', 'llamadas'));
    }
}
