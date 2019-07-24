<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicioPrestador extends Model
{
    protected $fillable = [
	    'id',
	    'id_servicio',
	    'id_profesional',
	    'oferta_visa',
	    'created_at',
	    'updated_at'     
	];
}
