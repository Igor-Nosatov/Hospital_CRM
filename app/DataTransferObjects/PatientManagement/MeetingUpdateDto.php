<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PatientManagement;

use App\Http\Requests\Api\V1\PatientManagement\Meeting\MeetingUpdateRequest;

class MeetingUpdateDto
{
    public function __construct(
        public string $description,
        public string $result,
        public string $written_entities,
        public string $date,
    ) {}

    public static function fromMeetingRequest(MeetingUpdateRequest $request): MeetingUpdateDto
    {
        $validatedData = $request->validated();

        return new self(
            $validatedData['description']?? null,
            $validatedData['result']?? null,
            $validatedData['written_entities']?? null,
            $validatedData['date']?? null,
        );
    }

    public function toArray(): array
    {
        return get_object_vars($this);
    }
}
