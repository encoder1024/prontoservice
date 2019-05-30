<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $fillable = [
	    'grupo_id',
	    'nombre',
	    'slug',
	    'peso'     
	];
}