<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Faculty;
use App\Models\Program;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\FacultyResource;
use App\Http\Resources\ProgramResource;

class StudentController extends Controller
{
    public function index()
    {
        $facultiesData = Faculty::all();
        $programData = Program::all();
        $faculties = FacultyResource::collection($facultiesData);
        $programs = ProgramResource::collection($programData);
        return inertia('Dashboard/Student/CreateStudent', compact('faculties', 'programs'));
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'npm' => 'required|unique:students,npm',
            'name' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'faculty' => 'required|integer',
            'program' => 'required|integer',
            'gender' => 'required|string',

        ]);



        $createStudent = Student::create([
            'npm' => $request->npm,
            'name' => $request->name,
            'faculty_id' => $request->faculty,
            'program_id' => $request->program,
            'gender' => $request->gender,
            'address' => $request->address,
            'birth_date' => now(),
            'birth_place' => $request->city
        ]);

        if ($createStudent) {
            return to_route('dashboard');
        }
    }
}
