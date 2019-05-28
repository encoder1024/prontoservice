<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    public function index()
    {
    	return view('web.dashboard');
    }

    public function galeria()
    {
    	return view('web.galeria');
    }

    public function single()
    {
    	return view('web.single');
    }

    public function bautismo()
    {
        return view('web.bautismo');
    }

    public function bautiMuestra()
    {
        return view('web.bautimuestra');
    }

    public function comuMuestra()
    {
        return view('web.bautimuestra');
    }

    public function cumleMuestra()
    {
        return view('web.bautimuestra');
    }

    public function primerMuestra()
    {
        return view('web.bautimuestra');
    }
}
