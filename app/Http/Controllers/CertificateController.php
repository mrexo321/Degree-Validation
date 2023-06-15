<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CertificateController extends Controller
{
    public function show(Certificate $certificate, Request $request)
    {
        $request->session()->regenerate();
        $values = Certificate::where('certificate_number', $request->certificate)->where('npm', $request->npm)->with('student', 'dean', 'rector')->get();
        return inertia('Show/Certificate', [
            'value' => $values
        ]);
    }

    public function exit(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return to_route('homepage');
    }
}
