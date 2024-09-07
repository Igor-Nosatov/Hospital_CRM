<?php

declare (strict_types = 1);

namespace App\Builders;

use Illuminate\Database\Eloquent\Builder;

class MeetingBuilder extends Builder
{
    public function __construct($query)
    {
        parent::__construct($query);
    }

    public function filterByMeetingStatus($meetingStatus)
    {
        return $this->when($meetingStatus != null, function ($q) use ($meetingStatus) {
            $q->where('meeting_status', $meetingStatus);
        });
    }
}
