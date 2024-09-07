<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Diagnose\DiagnoseRequest;

class DiagnoseDto
{
    public function __construct(
        public string $name
    ) {}

    public static function fromDiagnoseRequest(DiagnoseRequest $request): DiagnoseDto
    {
        return new self(
            name: $request->validated('name')
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
