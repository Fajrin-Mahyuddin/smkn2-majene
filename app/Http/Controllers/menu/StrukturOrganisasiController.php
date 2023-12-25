<?php

namespace App\Http\Controllers\menu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StrukturOrganisasiController extends Controller
{
    public function index() {
        return Inertia::render("menu/struktur-organisasi/Index");
    }
}
