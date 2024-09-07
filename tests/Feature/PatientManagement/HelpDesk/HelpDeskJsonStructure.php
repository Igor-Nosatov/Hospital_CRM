<?php

declare(strict_types=1);

namespace Tests\Feature\PatientManagement\HelpDesk;

trait HelpDeskJsonStructure
{
    protected function getCreateHelpDeskTicketJsonStructure(): array
    {
        return [
            'status',
            'message',
            'data' => [
                'id',
                'title',
                'description',
                'doctor_id',
                'created_at',
                'updated_at',
            ],
        ];
    }
}
