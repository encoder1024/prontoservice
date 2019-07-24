<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prestador extends Model
{
    protected $fillable = [
	    'profesional_id',
	    'nombre',
	    'apellido',
	    'token',
	    'telefono',
	    'celular',
	    'email',
	    'web',
	    'password',
	    'imagen',
	    'direccion',
	    'habilitado',
	    'estado',
	    'created_at',
	    'updated_at',
	    'provincia',
	    'localidad'     
	];
}
