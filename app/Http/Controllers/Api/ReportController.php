<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportController extends Controller
{
    function mostSelledProducts()
    {
        try {
            $mSProducts = DB::select("SELECT p.nombre, SUM(pb.cantidad) AS cantidad FROM productos_boletas pb, productos p WHERE pb.producto = p.id GROUP BY p.nombre LIMIT 5;");

            $response['data'] = $mSProducts;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function mostSelledMarks()
    {
        try {
            $mSProducts = DB::select("SELECT m.nombre, SUM(pb.cantidad) AS cantidad FROM boletas b, productos_boletas pb, productos p, marcas m WHERE pb.producto = p.id AND p.marca = m.id AND b.id = pb.boleta AND MONTH(b.fecha) = MONTH(SYSDATE()) GROUP BY m.nombre LIMIT 5;");

            $response['data'] = $mSProducts;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function getSalesMoney()
    {
        try {
            $mSProducts = DB::select("SELECT SUM(total) AS total FROM boletas WHERE MONTH(SYSDATE());");

            $response['soles'] = round($mSProducts['0']->total, 2);
            $response['dolares'] = round($mSProducts['0']->total / 3.33, 2);
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['soles'] = null;
            $response['dolares'] = null;
            $response['success'] = false;
        }

        return $response;
    }

    function lastestSales()
    {
        try {
            $mSProducts = DB::select("SELECT id, total FROM boletas ORDER BY id DESC LIMIT 7;");

            $response['data'] = $mSProducts;
            $response['success'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['success'] = false;
        }

        return $response;
    }

    function highSalaries() {
        try {
            $salaries = DB::select("SELECT nombre, sueldo_bruto AS sueldo FROM users ORDER BY sueldo_bruto DESC LIMIT 5;");

            $response['data'] = $salaries;
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['status'] = false;
        }

        return $response;
    }

    function totalSalaries() {
        try {
            $salary = DB::select("SELECT SUM(sueldo_bruto) as salary FROM users;");

            $response['salary'] = $salary[0]->salary;
            $response['status'] = true;
        } catch (\Exception $e) {
            $response['data'] = $e->getMessage();
            $response['status'] = false;
        }

        return $response;
    }
}
