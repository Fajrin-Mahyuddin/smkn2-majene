<?php

namespace App\Http\Controllers\menu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KompetensiKeahlianController extends Controller
{
    public function index() {
        return Inertia::render("menu/kompetensi-keahlian/Index");
    }
    public function detail(string $slug) {
        return Inertia::render("menu/kompetensi-keahlian/Detail", ["data" => $slug]);
    }
}
