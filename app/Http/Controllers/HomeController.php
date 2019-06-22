<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categoria;
use App\Grupo;
use App\UsersApp;
use App\StockPedido;
use App\Prestador;
use App\StockPrestador;
use App\Llamada;
use App\StockLlamada;
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

        $userstocks = StockPedido::all();
        $cantUserApp = UsersApp::all();
        $countUserApp = count($cantUserApp);
        $userStockLastWeek = StockPedido::orderBy('date', 'desc')->first();

        $actualUserCount = floatval($countUserApp);
        $lastWeekUserCount = floatval($userStockLastWeek->adj_close);
        $porcUserCount = ($actualUserCount/$lastWeekUserCount-1)*100;

        $prestadorestock = StockPrestador::all();
        $cantPresApp = Prestador::all();
        $countPresApp = count($cantPresApp);
        $presStockLastWeek = StockPrestador::orderBy('date', 'desc')->first();

        $actualPresCount = floatval($countPresApp);
        $lastWeekPresCount = floatval($presStockLastWeek->adj_close);
        $porcPresCount = ($actualPresCount/$lastWeekPresCount-1)*100;

        $llamadastock = StockLlamada::all();
        $llamadas = Llamada::orderBy('created_at', 'desc')->get();                
        $countLlamada = count($llamadas);

        
        return view('web.dashboard', compact('categorias', 'grupos', 
            'userstocks', 'prestadorestock', 'llamadastock', 'llamadas', 
            'countUserApp', 'countPresApp', 'countLlamada',
            'porcUserCount', 'porcPresCount'));
    }
}
