<?php

declare(strict_types=1);

namespace Tests\Feature\MedicalStaff\Setting;

use Tests\TestCase;
use Tests\Traits\AuthenticatesUsers;

class SettingServiceTest extends TestCase
{
    use AuthenticatesUsers;

    protected function setUp(): void
    {
        parent::setUp();
        $this->authenticateUserWithEnvCredentials();
    }

    public function testSettingsEndpoint()
    {
        $response = $this->get('/api/v1/settings');

        $response->assertStatus(self::STATUS_CODE_OK);

        $response->assertJsonStructure([
            'status',
            'message',
            'data' => [
                'profile_settings' => [
                    [
                        'id',
                        'setting_name',
                        'setting_type',
                        'setting_status',
                        'setting_desc',
                    ]
                ],
                'insurance_settings' => [
                    [
                        'id',
                        'setting_name',
                        'setting_type',
                        'setting_status',
                        'setting_desc',
                    ]
                ],
                'billing_settings' => [
                    [
                        'id',
                        'setting_name',
                        'setting_type',
                        'setting_status',
                        'setting_desc',
                    ]
                ],
                'notification_settings' => [
                    [
                        'id',
                        'setting_name',
                        'setting_type',
                        'setting_status',
                        'setting_desc',
                    ]
                ],
            ],
        ]);
    }
}
