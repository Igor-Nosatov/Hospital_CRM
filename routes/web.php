<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route to serve Swagger UI
Route::get('api/documentation', function () {
    $documentation = 'default'; // Set the documentation value as needed
    $urlToDocs = url('api-docs/api-docs.json'); // Use the URL helper to generate the full URL to your API docs
    $useAbsolutePath = false; // Set this based on your requirement

    return view('vendor.l5-swagger.index', compact('documentation', 'urlToDocs', 'useAbsolutePath'));
});



