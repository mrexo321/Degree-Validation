<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Certificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'certificate_number',
        'npm'
    ];

    // protected $with = ['student', 'dean', 'rector'];

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class, 'npm', 'npm');
    }
    public function rector(): BelongsTo
    {
        return $this->belongsTo(Rector::class);
    }

    public function dean()
    {
        return $this->belongsTo(Dean::class);
    }
}
