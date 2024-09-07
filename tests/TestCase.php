<?php

declare(strict_types=1);

namespace Tests;

use App\Console\Kernel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\RefreshDatabaseState;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Http\Response;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, RefreshDatabase;

    // Status Codes
    const STATUS_CODE_OK = Response::HTTP_OK;
    const STATUS_NOT_FOUND = Response::HTTP_NOT_FOUND;
    const STATUS_METHOD_NOT_ALLOWED = Response::HTTP_METHOD_NOT_ALLOWED;
    const STATUS_BAD_REQUEST = Response::HTTP_BAD_REQUEST;
    const STATUS_UNAUTHORIZED = Response::HTTP_UNAUTHORIZED;

    // Routes
    const POST_LOGIN = '/api/v1/login';
    const GET_DASHBOARD_DATA = '/api/v1/dashboard';
    const GET_MEDICAL_ANALYTIC_DATA = '/api/v1/medical-analytics';
    const BASE_DOCTOR_URL = '/api/v1/doctor/';
    const GET_MEDICAL_EVENTS = '/api/v1/medical-events';
    const GET_SALARY_REPORT = '/api/v1/salary-report';
    const BASE_URL_APPOINTMENTS = '/api/v1/appointments';
    const BASE_URL_HELP_DESK = '/api/v1/helpdesk';
    const BASE_URL_MEETINGS = '/api/v1/meetings';
    const BASE_URL_PATIENTS = '/api/v1/patients';
    const BASE_URL_PHYSICAL_EXAMINATION = '/api/v1/physical-examination';

    // Error Messages
    const ERROR_UNAUTHORIZED = 'Unauthorized';
    const ERROR_NOT_FOUND = 'Not Found';
    const ERROR_METHOD_NOT_ALLOWED = 'Method Not Allowed';
    const ERROR_INVALID_PARAMETERS = 'Invalid parameters';
    const ERROR_DOCTOR_NOT_FOUND = 'Doctor not found';
    const SUCCESS_MESSAGE = 'Success';
    const DATA_DELETED_SUCCESSFULLY_MESSAGE = 'Data deleted successfully';
    const NON_EXIST_ROUTE = 'non-exist-route';
    const ERROR_PATIENT_NOT_FOUND = 'Patient not found';

    // Constants for testing
    const INTEGER_FOR_TEST_STATUS_NOT_FOUND = 9999;

    protected function refreshTestDatabase()
    {
        if (! RefreshDatabaseState::$migrated) {
            $this->artisan('migrate:fresh');
            $this->generateDefaultData();
            $this->app[Kernel::class]->setArtisan(null);
            RefreshDatabaseState::$migrated = true;
        }

        $this->beginDatabaseTransaction();
    }

    private function generateDefaultData(): void
    {
        Artisan::call('db:seed', ['--class' => 'TestDatabaseSeeder']);
    }
}
