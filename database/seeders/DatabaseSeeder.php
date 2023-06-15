<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Certificate;
use App\Models\Dean;
use App\Models\Degree;
use App\Models\User;
use App\Models\Faculty;
use App\Models\Program;
use App\Models\Rector;
use App\Models\Student;
use Illuminate\Database\Seeder;
use Database\Factories\DeanFactory;
use Database\Factories\UserFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::factory(10)->create();
        Degree::factory(4)->create();
        Faculty::factory(5)->create();
        Program::factory(5)->create();
        Dean::factory(5)->create();
        Rector::factory(4)->create();
        Rector::factory(4)->create();
        Student::factory(3)->create();
        // Certificate::factory(3)->create();
    }
}
