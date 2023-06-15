<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'npm' => rand(1, 1000),
            'name' => fake()->name(),
            'faculty_id' => rand(1, 3),
            'program_id' => rand(1, 3),
            'gender' => 'Laki-Laki',
            'birth_date' => now(),
            'address' => 'Ciomas',
            'birth_place' => 'Bogor'
        ];
    }
}
