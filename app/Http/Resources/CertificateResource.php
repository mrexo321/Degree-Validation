<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CertificateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'certificate_number' => $this->certificate_number,
            'npm' => $this->npm,
            'student' => new StudentResource($this->student),
            'rector' => new RectorResource($this->rector),
            'dean' => new DeanResource($this->dean),
        ];
    }
}
