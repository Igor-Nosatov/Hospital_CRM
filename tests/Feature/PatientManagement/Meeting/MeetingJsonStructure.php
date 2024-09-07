<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Meeting;

trait MeetingJsonStructure
{
    protected function getMeetingListJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'meeting_count' => [
                    'total_meetings_for_month',
                    'cancelled_meetings',
                    'active_meetings',
                    'completed_meetings',
                ],
                'meeting_filter' => [
                    '*' => [
                        'filter_name',
                        'filter_value',
                    ],
                ],
                'meeting_list' => [
                    '*' => [
                        'id',
                        'meeting_status',
                        'meeting_date',
                        'description',
                        'patient_id',
                        'patient_full_name',
                        'patient_date_of_birth',
                        'address',
                        'phone_number',
                        'email',
                    ]
                ]
            ]
        ];
    }

    protected function getCreateMeetingJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'description',
                'result',
                'written_entities',
                'date',
                'appointment_id',
                'patient_id',
                'doctor_id',
                'updated_at',
                'created_at',
                'id',
            ],
        ];
    }
}
