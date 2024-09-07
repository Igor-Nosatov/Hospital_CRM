<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\MedicalEvent;

trait MedicalEventJsonStructure
{
    protected function getMedicalEventJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'medical_event_data' => [
                    '*' => [
                        'title',
                        'event_id',
                        'lector_photo',
                        'medical_event_type',
                        'lecturer',
                        'event_organizer',
                        'event_date',
                        'language',
                    ],
                ],
                'meta' => [
                    'total',
                    'per_page',
                    'current_page',
                    'last_page',
                    'next_page_url',
                    'prev_page_url',
                ],
            ],
        ];
    }
}
