<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\PatientPhoto\PatientPhotoRequest;

class PatientPhotoDto
{
    public function __construct(
        public string $name,
        public string $file_name,
        public string $mime_type,
        public string $path,
        public string $disk,
        public string $file_hash,
        public ?string $collection,
        public int $size,
        public int $patient_id,
    ) {}

    public static function fromRequest(PatientPhotoRequest $request): PatientPhotoDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['name'],
            $validatedData['file_name'],
            $validatedData['mime_type'],
            $validatedData['path'],
            $validatedData['disk'],
            $validatedData['file_hash'],
            $validatedData['collection'] ?? null,
            $validatedData['size'],
            $validatedData['patient_id'],
        );
    }
}
