<?php

declare(strict_types=1);

namespace Tests\Feature\Dashboard;

trait DashboardJsonStructure
{
    protected function getDashboardJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'appointment_score' => [
                    'total_appointments',
                    'total_online_appointments',
                    'total_offline_appointments',
                ],
                'first_appointments_today' => [
                    '*' => [
                        'id',
                        'patient_id',
                        'appointment_datetime',
                        'status',
                        'type',
                        'patient_full_name',
                        'patient_age',
                        'visits_count',
                    ],
                ],
                'doctor_personal_score' => [
                    'total_patients',
                    'month_list',
                    'visit_list',
                    'doctor_rank',
                    'current_year',
                ],
                'new_medical_events' => [
                    '*' => [
                        'id',
                        'name',
                        'organizer',
                        'event_date',
                        'language',
                        'url_img',
                    ],
                ],
            ],
        ];
    }
}
