<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\menu\KompetensiKeahlianController;
use App\Http\Controllers\menu\StrukturOrganisasiController;
use App\Http\Controllers\menu\BeritaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('index');
// });
Route::get("/profile", [IndexController::class, "render"]);
Route::post("/user", [IndexController::class, "postUser"]);
Route::get("/", [IndexController::class, "index"]);
Route::get("/kompetensi-keahlian", [KompetensiKeahlianController::class, "index"]);
Route::get("/kompetensi-keahlian/{slug}", [KompetensiKeahlianController::class, "detail"]);

Route::get("/struktur-organisasi", [StrukturOrganisasiController::class, "index"]);
Route::get("/berita", [BeritaController::class, "index"]);