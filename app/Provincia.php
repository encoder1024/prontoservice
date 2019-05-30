<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provincia extends Model
{
    protected $fillable = [
	    'id',
	    'pais_id',
	    'nombre',
	    'habitantes',
	    'latitud',
	    'longitud',
	    'created_at',
	    'updated_at'     
	];
}
