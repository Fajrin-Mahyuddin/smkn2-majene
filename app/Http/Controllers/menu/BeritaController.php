<?php

namespace App\Http\Controllers\menu;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BeritaController extends Controller
{
    public function index() {
        return Inertia::render("menu/berita/Index");
    }
    public function detail(string $slug) {
        return Inertia::render("menu/berita/Detail", ["data" => $slug]);
    }
}
