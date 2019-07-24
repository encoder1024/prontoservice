<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersApp extends Model
{
    protected $fillable = [
	        'user_id',
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
