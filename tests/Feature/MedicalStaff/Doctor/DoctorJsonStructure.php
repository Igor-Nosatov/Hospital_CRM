<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Doctor;

trait DoctorJsonStructure
{
    public function getDoctorProfileJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'personal_information' => [
                    'id',
                    'full_name',
                    'address',
                    'email',
                    'phone_number',
                    'date_of_birth',
                    'religion',
                    'biography',
                    'education' => [
                        '*',
                    ],
                    'experience' => [
                        '*',
                    ],
                    'languages' => [
                        '*',
                    ],
                    'current_location' => [
                        '*',
                    ],
                    'certifications' => [
                        '*',
                    ],
                    'medical_license' => [
                        '*',
                    ],
                    'professional_memberships' => [
                        '*',
                    ],
                    'awards' => [
                        '*',
                    ],
                    'publications' => [
                        '*',
                    ],
                    'research_interests' => [
                        '*',
                    ],
                ],
                'time_spent_this_month' => [
                    'offline',
                    'online',
                    'total',
                ],
                'patients_served_this_month' => [
                    'all_patients',
                    'regular_patients',
                    'new_patients',
                ],
                'notifications_overview' => [
                    'total_notifications',
                    'unread_notifications',
                    'read_notifications',
                ],
                'patient_demographics' => [
                    'total_patients',
                    'adults',
                    'children',
                ],
                'patient_payments' => [
                    'processed_payment',
                    'complete_payment',
                    'confirmed_payment',
                ],
            ],
        ];
    }

    public function getCreateDoctorJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'working_mode',
                'first_name',
                'last_name',
                'date_of_birth',
                'religion',
                'address',
                'phone_number',
                'home_number',
                'other_phone_number',
                'marital_status',
                'status',
                'speciality_id',
                'department_id',
                'country_id',
                'user_id',
                'updated_at',
                'created_at',
                'id',
            ],
        ];
    }

    public function getUpdateDoctorJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'working_mode',
                'first_name',
                'last_name',
                'date_of_birth',
                'religion',
                'address',
                'phone_number',
                'home_number',
                'other_phone_number',
                'marital_status',
                'status',
                'biography',
                'speciality_id',
                'department_id',
                'country_id',
                'user_id',
                'deleted_at',
                'created_at',
                'updated_at',
                'education' => [
                    '*',
                ],
                'experience' => [
                    '*',
                ],
                'languages' => [
                    '*',
                ],
                'current_location' => [
                    '*',
                ],
                'certifications' => [
                    '*',
                ],
                'medical_license' => [
                    '*',
                ],
                'professional_memberships' => [
                    '*',
                ],
                'awards' => [
                    '*',
                ],
                'publications' => [
                    '*',
                ],
                'research_interests' => [
                    '*',
                ],
            ],
        ];
    }
}
