<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Appointment;

trait AppointmentJsonStructure
{
    /**
     * Structure for the response of getting appointments.
     *
     * @return array
     */
    protected function getAppointmentJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'appointment_count' => [
                    'total_consultations_for_month',
                    'in_person_consultations',
                    'video_consultations',
                    'total_completed_consultations',
                ],
                'calendar_data' => [
                    '*' => [
                        'appointment_list' => [
                            '*' => [
                                'id',
                                'appointment_datetime',
                                'reason',
                                'status',
                                'type',
                            ]
                        ],
                        'notification_list' => [
                            '*' => [
                                'id',
                                'title',
                                'message',
                                'created_at',
                            ]
                        ],
                        'medical_event_list' => [
                            '*' => [
                                'id',
                                'name',
                                'organizer',
                                'medical_event_type',
                                'language',
                            ]
                        ],
                    ]
                ]
            ]
        ];
    }

    /**
     * Structure for the response of creating an appointment.
     *
     * @return array
     */
    protected function getCreateAppointmentJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'appointment_datetime',
                'reason',
                'symptoms',
                'notes',
                'status',
                'type',
                'reminder_datetime',
                'patient_id',
                'doctor_id',
                'medical_service_id',
                'updated_at',
                'created_at',
                'id',
            ]
        ];
    }

    /**
     * Structure for the response of retrieving an appointment by ID.
     *
     * @return array
     */
    protected function getAppointmentByIdJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'appointment_datetime',
                'reason',
                'symptoms',
                'notes',
                'status',
                'type',
                'reminder_datetime',
                'patient_id',
                'doctor_id',
                'medical_service_id',
            ]
        ];
    }

    /**
     * Structure for the response of updating an appointment.
     *
     * @return array
     */
    protected function getUpdateAppointmentJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'appointment_datetime',
                'reason',
                'symptoms',
                'notes',
                'status',
                'type',
                'reminder_datetime',
                'patient_id',
                'doctor_id',
                'created_at',
                'updated_at',
                'medical_service_id',
                'deleted_at'
            ]
        ];
    }
}
