<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->string('npm', 12)->primary();
            $table->string('name');
            $table->foreignId('faculty_id')->constrained()->cascadeOnDelete();
            $table->foreignId('program_id')->constrained()->cascadeOnDelete();
            $table->enum('gender', ['laki-laki', 'perempuan']);
            $table->date('birth_date');
            $table->string('address', 100);
            $table->string('birth_place', 15);
            $table->timestamps();
            // $table->primary('npm');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
