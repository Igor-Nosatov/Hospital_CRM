<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\HelpDesk\HelpDeskRequest;

class HelpDeskDto
{
    public function __construct(
        public string $title,
        public string $description,
        public int $doctor_id,
    ) {}

    public static function fromHelpDeskRequest(HelpDeskRequest $request): HelpDeskDto
    {
        return new self(
            title: $request->validated('title'),
            description: $request->validated('description'),
            doctor_id: $request->validated('doctor_id'),
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
