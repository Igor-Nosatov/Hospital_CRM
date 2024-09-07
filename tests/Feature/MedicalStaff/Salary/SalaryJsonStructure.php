<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Salary;

trait SalaryJsonStructure
{
    protected function getSalaryJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'salary_list_by_month' => [
                    '*' => [
                        'id',
                        'amount',
                        'payment_date',
                        'payment_method',
                        'currency',
                        'comments',
                        'patient_full_name',
                        'company_fee',
                        'doctor_wages',
                    ],
                ],
                'salary_count' => [
                    'salary_for_next_date',
                    'doctor_full_name',
                    'total_patients',
                    'total_doctor_wages',
                    'bonus',
                ],
            ],
        ];
    }
}
