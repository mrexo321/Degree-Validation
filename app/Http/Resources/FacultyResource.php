<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\DegreeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FacultyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'faculty_code' => $this->faculty_code,
            'dean' => new DeanResource($this->dean),
            'degree' => new DegreeResource($this->degree),
        ];
    }
}
