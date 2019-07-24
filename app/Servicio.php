<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    protected $fillable = [
	    'servicio_id',
	    'grupo',
	    'categoria',
	    'detalle',
	    'habilitado',
	    'estado',
	    'created_at',
	    'updated_at'     
	];
}
