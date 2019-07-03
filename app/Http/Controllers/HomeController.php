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
use App\Califica;
use App\StockCalifica;
use App\VistaPresByGrupo;
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

        // USERS**********************************************************
        $userstocks = StockPedido::all();
        $cantUserApp = UsersApp::all();
        $countUserApp = count($cantUserApp);
        $userStockLastWeek = StockPedido::orderBy('date', 'desc')->first();

        $actualUserCount = floatval($countUserApp);
        $lastWeekUserCount = floatval($userStockLastWeek->adj_close);
        $porcUserCount = ($actualUserCount/$lastWeekUserCount-1)*100;

        // PRESTADORES****************************************************
        $prestadorestock = StockPrestador::all();
        $cantPresApp = Prestador::all();
        $countPresApp = count($cantPresApp);
        $presStockLastWeek = StockPrestador::orderBy('date', 'desc')->first();

        $actualPresCount = floatval($countPresApp);
        $lastWeekPresCount = floatval($presStockLastWeek->adj_close);
        $porcPresCount = ($actualPresCount/$lastWeekPresCount-1)*100;

        $contPresByGroup = VistaPresByGrupo::all();

        $countAgua=0;
        $countEner=0;
        $countClim=0;
        $countSuel=0;
        $countServ=0;
        $countEstr=0;
        $countTecn=0;

        $i=0;

        while ($i < count($contPresByGroup)) {


            switch ($contPresByGroup[$i]->grupo_id) {
                case '1':
                    $countAgua++;
                    break;
                case '2':
                    $countEner++;
                    break;
                case '3':
                    $countClim++;
                    break;
                case '4':
                    $countSuel++;
                    break;
                case '5':
                    $countServ++;
                    break;
                case '6':
                    $countEstr++;
                    break;
                
                default:
                    $countTecn++;
                    break;
            }
            $i++;
        }

        $auxiliar = array();
        $auxiliar["contAgua"] = $countAgua;
        $auxiliar["contEner"] = $countEner;
        $auxiliar["contClim"] = $countClim;
        $auxiliar["contSuel"] = $countSuel;
        $auxiliar["contServ"] = $countServ;
        $auxiliar["contEstr"] = $countEstr;
        $auxiliar["contTecn"] = $countTecn;

        $prestByGroup = array();

        array_push($prestByGroup, $auxiliar);

        $jsonPresCount = json_encode($prestByGroup);

        // LLAMADAS*******************************************************
        $llamadastock = StockLlamada::all();
        $llamadas = Llamada::orderBy('created_at', 'desc')->get();                
        $countLlamada = count($llamadas);
        $llamaStockLastWeek = StockLlamada::orderBy('date', 'desc')->first();

        $actualLlamaCount = floatval($countLlamada);
        $lastWeekLlamaCount = floatval($llamaStockLastWeek->adj_close);
        $porcLlamaCount = ($actualLlamaCount/$lastWeekLlamaCount-1)*100;

        // CALIFICACIONES*************************************************
        $calificastock = StockCalifica::all();
        $calificas = Califica::orderBy('created_at', 'desc')->get();                
        $countCalifica = count($calificas);
        $calificaStockLastWeek = StockCalifica::orderBy('date', 'desc')->first();

        $actualCalificaCount = floatval($countCalifica);
        $lastWeekCalificaCount = floatval($calificaStockLastWeek->adj_close);
        $porcCalificaCount = ($actualCalificaCount/$lastWeekCalificaCount-1)*100;


        return view('web.dashboard', compact('categorias', 'grupos', 
            'userstocks', 'prestadorestock', 'llamadastock', 'calificastock','llamadas', 
            'countUserApp', 'countPresApp', 'countLlamada', 'countCalifica',
            'porcUserCount', 'porcPresCount', 'porcLlamaCount', 'porcCalificaCount', 'jsonPresCount'));
    }

}
