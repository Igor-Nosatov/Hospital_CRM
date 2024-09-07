<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\Patient;

trait PatientJsonStructure
{
    protected function getGetPatientsJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'meta' => [
                    'current_page',
                    'first_page_url',
                    'from',
                    'last_page',
                    'last_page_url',
                    'links' => [
                        '*' => [
                            'url',
                            'label',
                            'active'
                        ]
                    ],
                    'next_page_url',
                    'path',
                    'per_page',
                    'prev_page_url',
                    'to',
                    'total'
                ],
                'patient_data' => [
                    '*' => [
                        'id',
                        'first_name',
                        'last_name',
                        'religion',
                        'date_of_birth',
                        'address',
                        'identity_code',
                        'phone_number',
                        'email',
                        'occupation',
                        'legal_representative_first_name',
                        'legal_representative_last_name',
                        'legal_representative_relationship',
                        'legal_representative_phone_number',
                        'marital_status',
                        'status',
                        'appointments' => [
                            '*' => [
                                'id',
                                'patient_id',
                                'created_at'
                            ]
                        ],
                        'patient_visits' => [
                            '*' => [
                                'id',
                                'patient_id',
                                'created_at'
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    protected function getCreatePatientJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'first_name',
                'last_name',
                'date_of_birth',
                'religion',
                'occupation',
                'address',
                'phone_number',
                'identity_code',
                'legal_representative_first_name',
                'legal_representative_last_name',
                'legal_representative_relationship',
                'legal_representative_phone_number',
                'marital_status',
                'status',
                'insurance_id',
                'doctor_id',
                'updated_at',
                'created_at',
                'id',
            ],
        ];
    }

    protected function getDeletePatientJsonStructure(): array
    {
        return [
            'status',
            'message',
        ];
    }

    protected function getShowPatientByIdJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'general_info' => [
                    'full_name',
                    'first_name',
                    'last_name',
                    'religion',
                    'date_of_birth',
                    'address',
                    'identity_code',
                    'phone_number',
                    'email',
                    'occupation',
                    'legal_representative_first_name',
                    'legal_representative_last_name',
                    'legal_representative_relationship',
                    'legal_representative_phone_number',
                    'marital_status',
                    'status',
                    'height',
                    'weight',
                    'blood_pressure',
                    'heart_rate',
                ],
                'laboratory_tests' => [
                    '*' => [
                    ]
                ],
                'disease_history',
                'treatment_plan' => [
                    'current_page',
                    'data' => [
                        '*' => [
                        ]
                    ],
                    'first_page_url',
                    'from',
                    'last_page',
                    'last_page_url',
                    'links' => [
                        '*' => [
                            'url',
                            'label',
                            'active'
                        ]
                    ],
                    'next_page_url',
                    'path',
                    'per_page',
                    'prev_page_url',
                    'to',
                    'total'
                ],
                'appointment_list' => [
                    'current_page',
                    'data' => [
                        '*' => [
                        ]
                    ],
                    'first_page_url',
                    'from',
                    'last_page',
                    'last_page_url',
                    'links' => [
                        '*' => [
                            'url',
                            'label',
                            'active'
                        ]
                    ],
                    'next_page_url',
                    'path',
                    'per_page',
                    'prev_page_url',
                    'to',
                    'total'
                ]
            ]
        ];
    }

    protected function getUpdatePatientJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'first_name',
                'last_name',
                'date_of_birth',
                'religion',
                'occupation',
                'address',
                'phone_number',
                'email',
                'identity_code',
                'legal_representative_first_name',
                'legal_representative_last_name',
                'legal_representative_relationship',
                'legal_representative_phone_number',
                'marital_status',
                'status',
                'insurance_id',
                'doctor_id',
                'deleted_at',
                'created_at',
                'updated_at',
            ],
        ];
    }
}
