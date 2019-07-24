<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Llamada extends Model
{
	    protected $fillable = [
	        'id',
	        'user_id',
	        'pres_id',
	        'imagen_pres',
	        'nombre_pres',
	        'created_at',
	        'nombre_user',
	        'estado_pedido',
	        'updated_at'    
    	];
}