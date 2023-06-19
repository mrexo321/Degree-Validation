<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use App\Http\Resources\FacultyResource;
use App\Http\Resources\ProgramResource;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'npm' => $this->npm,
            'name' => $this->name,
            'faculty' => new FacultyResource($this->faculty),
            'program' => new ProgramResource($this->program),
            'birth_date' => $this->birth_date,
            'address' => $this->address,
            'birth_place' => $this->birth_place,
        ];
    }
}
