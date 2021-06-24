<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comisiones;

class ComisionesController extends Controller
{
    function listar(){
        try{
            $data = Comisiones::all();

            $response['data'] = $data;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }
}
