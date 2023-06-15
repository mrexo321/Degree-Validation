<?php

use App\Models\Student;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('certificates', function (Blueprint $table) {
            $table->string('certificate_number');
            $table->string('npm', 12)->unique();
            $table->foreignId('rector_id')->constrained()->cascadeOnDelete();
            $table->foreignId('dean_id')->constrained()->cascadeOnDelete();
            $table->date('released');
            $table->timestamps();

            $table->foreign('npm')->references('npm')->on('students');
            $table->primary(['certificate_number', 'npm']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
