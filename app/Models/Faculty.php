<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Faculty extends Model
{
    use HasFactory;

    protected $with = ['degree'];

    public function degree(): BelongsTo
    {
        return $this->belongsTo(Degree::class);
    }
}
