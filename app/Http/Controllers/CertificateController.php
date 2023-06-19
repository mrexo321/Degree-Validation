<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CertificateResource;

class CertificateController extends Controller
{
    public function show(Certificate $certificate, Request $request)
    {
        // $request->session()->regenerate();
        // // $values = Certificate::where('certificate_number', $request->certificate)->where('npm', $request->npm)->with('student', 'dean', 'rector')->get();

        $data = Certificate::where('certificate_number', $request->certificate)->where('npm', $request->npm)->get();
        $values = CertificateResource::collection($data);
        // dd($values);
        return inertia('Show/Certificate', [
            'value' => $values
        ]);

        // return CertificateResource::collection(Certificate::all());
    }

    public function exit(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
        return to_route('homepage');
    }
}
