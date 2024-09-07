<?php

use App\Http\Controllers\Api\V1\Auth\AuthController;
use App\Http\Controllers\Api\V1\Auth\PermissionController;
use App\Http\Controllers\Api\V1\Auth\RoleController;
use App\Http\Controllers\Api\V1\Dashboard\DashboardController;
use App\Http\Controllers\Api\V1\Documents\ReceiptController;
use App\Http\Controllers\Api\V1\Documents\SickListController;
use App\Http\Controllers\Api\V1\MedicalStaff\AnalyticsController;
use App\Http\Controllers\Api\V1\MedicalStaff\DoctorController;
use App\Http\Controllers\Api\V1\MedicalStaff\DoctorPhotoController;
use App\Http\Controllers\Api\V1\MedicalStaff\MedicalEventController;
use App\Http\Controllers\Api\V1\MedicalStaff\MedicalEventFeedbackController;
use App\Http\Controllers\Api\V1\MedicalStaff\MedicalServiceController;
use App\Http\Controllers\Api\V1\MedicalStaff\NotificationController;
use App\Http\Controllers\Api\V1\MedicalStaff\PaymentController;
use App\Http\Controllers\Api\V1\MedicalStaff\SalaryReportController;
use App\Http\Controllers\Api\V1\MedicalStaff\SettingController;
use App\Http\Controllers\Api\V1\PatientManagement\AppointmentController;
use App\Http\Controllers\Api\V1\PatientManagement\DiagnoseController;
use App\Http\Controllers\Api\V1\PatientManagement\HelpDeskController;
use App\Http\Controllers\Api\V1\PatientManagement\MeetingController;
use App\Http\Controllers\Api\V1\PatientManagement\PatientController;
use App\Http\Controllers\Api\V1\PatientManagement\PatientDocsController;
use App\Http\Controllers\Api\V1\PatientManagement\PatientPhotoController;
use App\Http\Controllers\Api\V1\PatientManagement\PatientVisitController;
use App\Http\Controllers\Api\V1\PatientManagement\PhysicalExaminationController;
use App\Http\Controllers\Api\V1\PatientManagement\TreatmentPlanController;
use App\Http\Controllers\Api\V1\PatientManagement\LabTestController;
use App\Http\Controllers\Api\V1\PatientManagement\DiseaseHistoryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/** @see \App\Http\Controllers\Api\V1\Auth\AuthController::register() */
Route::post('/v1/register', [AuthController::class, 'register']);

/** @see \App\Http\Controllers\Api\V1\Auth\AuthController::login() */
Route::post('/v1/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    /** @see \App\Http\Controllers\Api\V1\Auth\AuthController::logout() */
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::prefix('v1')->group(function () {
        /** @see \App\Http\Controllers\Api\V1\Dashboard\DashboardController::index() */
        Route::apiResource('dashboard', DashboardController::class)->only(['index']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\AnalyticsController::index() */
        Route::apiResource('medical-analytics', AnalyticsController::class)->only(['index']);

        /** @see \App\Http\Controllers\Api\V1\Auth\RoleController */
        Route::apiResource('admin/role', RoleController::class)->except(['show', 'update']);

        /** @see \App\Http\Controllers\Api\V1\Auth\PermissionController */
        Route::apiResource('admin/permission', PermissionController::class)->except(['show', 'update']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientController::getBasicPatientInfo() */
        Route::get('patients/basic-info', [PatientController::class, 'getBasicPatientInfo']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientController::patientSearch() */
        Route::get('patients/patient-search', [PatientController::class, 'patientSearch']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientController */
        Route::apiResource('patients', PatientController::class);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientPhotoController */
        Route::apiResource('patient-photo', PatientPhotoController::class)->only(['show', 'store', 'destroy']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PhysicalExaminationController */
        Route::apiResource('physical-examination', PhysicalExaminationController::class)->only(['show', 'store']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\MedicalEventFeedbackController */
        Route::apiResource('medical-event-feedback', MedicalEventFeedbackController::class)->only(['store']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\LabTestController */
        Route::apiResource('lab-test', LabTestController::class)->only(['show', 'store', 'destroy']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\AppointmentController::getAppointmentList() */
        Route::get('appointment-list', [AppointmentController::class, 'getAppointmentList']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\DiseaseHistoryController::getLatestDiseaseHistory() */
        Route::get('disease-history/latest/{id}', [DiseaseHistoryController::class, 'getLatestDiseaseHistory']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\DiseaseHistoryController */
        Route::apiResource('disease-history', DiseaseHistoryController::class)->only(['show', 'store']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\TreatmentPlanController */
        Route::apiResource('treatment-plan', TreatmentPlanController::class)->only(['show', 'store', 'destroy']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\DoctorController */
        Route::get('doctor/patient-visits', [DoctorController::class, 'patientVisits']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\DoctorController */
        Route::apiResource('doctor', DoctorController::class);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\MedicalEventController */
        Route::apiResource('medical-events', MedicalEventController::class);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientDocsController */
        Route::apiResource('patient-docs', PatientDocsController::class)->only(['index', 'store']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\DoctorPhotoController */
        Route::apiResource('doctor-photos', DoctorPhotoController::class)->only(['show', 'store', 'destroy']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\AppointmentController */
        Route::apiResource('appointments', AppointmentController::class);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\DiagnoseController */
        Route::apiResource('diagnoses', DiagnoseController::class)->except(['show', 'update']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\SettingController */
        Route::apiResource('settings', SettingController::class)->only(['index', 'update']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\PaymentController */
        Route::apiResource('payments', PaymentController::class)->except(['update']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\PatientVisitController */
        Route::apiResource('visits', PatientVisitController::class);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\MeetingController  */
        Route::apiResource('meetings', MeetingController::class)->except(['destroy']);

        /** @see \App\Http\Controllers\Api\V1\Documents\SickListController  */
        Route::apiResource('sick-list', SickListController::class);

        /** @see \App\Http\Controllers\Api\V1\Documents\ReceiptController   */
        Route::apiResource('receipt-list', ReceiptController::class);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\SalaryReportController::index() */
        Route::apiResource('salary-report', SalaryReportController::class)->only(['index']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\NotificationController::index()   */
        Route::apiResource('doctor-notifications', NotificationController::class)->only(['index']);

        /** @see \App\Http\Controllers\Api\V1\PatientManagement\HelpDeskController::store()  */
        Route::apiResource('helpdesk', HelpDeskController::class)->only(['store']);

        /** @see \App\Http\Controllers\Api\V1\MedicalStaff\MedicalServiceController::index()  */
        Route::apiResource('medical-service', MedicalServiceController::class)->only(['index']);
    });
});
