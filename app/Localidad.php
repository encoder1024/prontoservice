<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Localidad extends Model
{
    protected $fillable = [
	    'id',
	    'provicia_id',
	    'nombre',
	    'habitantes',
	    'latitud',
	    'longitud',
	    'created_at',
	    'updated_at'     
	];
}
