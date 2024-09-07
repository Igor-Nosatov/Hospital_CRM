<?php

namespace App\Http\Resources\Api\V1\Documents\Receipt;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SingleReceiptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
        ];
    }
}
