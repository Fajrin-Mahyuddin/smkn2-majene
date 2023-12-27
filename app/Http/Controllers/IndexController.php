<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index() {
        return Inertia::render('Home');
    }

    public function visi_misi() {
        return Inertia::render('VisiMisi');
    }
    
    public function pengumuman() {
            return Inertia::render('Pengumuman');
    }

    public function render() {
        return Inertia::render('Profile', ["name" => "fajrin"]);
    }

    public function postUser(Request $req) {
        dd($req->input('id'), $req->input('name'));
    }
}
