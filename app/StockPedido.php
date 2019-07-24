<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockPedido extends Model
{
    
//    public function stock() {
     
	    protected $fillable = [
	        'id',
	        'date',
	        'open',
	        'high',
	        'low',
	        'close',
	        'volumen',
	        'adj_close'       
    	];
    	

//    }
}