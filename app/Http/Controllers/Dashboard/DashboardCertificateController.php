<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Dean;
use App\Models\Rector;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\DeanResource;
use App\Http\Resources\StudentResource;

class DashboardCertificateController extends Controller
{
    public function index()
    {
        $students = StudentResource::collection(Student::all());
        return inertia('Dashboard/Certificate/CreateCertificate', compact('students'));
    }

    public function store(Request $request)
    {
        $credential = $request->validate([
            'student' => 'required|integer|unique:certificates,npm',
            'certificate' => 'required|string|unique:certificates,certificate_number'
        ]);


        $students = StudentResource::collection(Student::where('npm', $request->student)->get());
        // $dean = DeanResource::collection(Dean::where('faculty_id', $testing->faculty_id)->get());


        dd($students);





        // Certificate::create([
        //     ''
        // ])
    }
}
