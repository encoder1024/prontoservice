<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
   	    protected $fillable = [
	        'id',
	        'nombre',
	        'slug',
	        'peso'     
    	];
}
