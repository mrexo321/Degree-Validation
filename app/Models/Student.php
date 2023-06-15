<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Student extends Model
{
    use HasFactory;

    protected $with = ['faculty', 'program'];
    // public function certificate(): HasOne
    // {
    //     return $this->hasOne(Certificate::class, 'npm', 'npm');
    // }

    public function faculty(): BelongsTo
    {
        return  $this->belongsTo(Faculty::class);
    }

    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }
}
