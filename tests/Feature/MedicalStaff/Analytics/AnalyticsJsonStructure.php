<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Analytics;

trait AnalyticsJsonStructure
{
    protected function getAnalyticsJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'payment_report' => [
                    'month',
                    'total',
                ],
                'top_services' => [
                    '*' => [
                        'service_name',
                        'type',
                        'service_count_used',
                        'service_price',
                    ],
                ],
                'expenses' => [
                    'medical_expense_type',
                    'amount',
                ],
                'service_statistic' => [
                    'patient_offline_service',
                    'patient_online_service',
                ],
                'top_patient_visits_for_month' => [
                    '*' => [
                        'id',
                        'patient_full_name',
                        'patient_visits',
                        'patient_email',
                    ],
                ],
                'payments' => [
                    'month',
                    'amount',
                ],
            ],
        ];
    }
}
