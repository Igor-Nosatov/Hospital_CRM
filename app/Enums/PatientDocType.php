<?php

declare(strict_types=1);

namespace App\Enums;

enum PatientDocType: string
{
    case DISEASE_HISTORY = 'Disease History';
    case SURVEY_RESULTS = 'Survey Results';
    case DIAGNOSTIC_REPORTS = 'Diagnostic Reports';
    case XRAYS_AND_REPORTS = 'X-rays and Reports';
    case ULTRASOUND_EXAMINATIONS = 'Ultrasound Examinations';
    case MRI_CT_SCANS = 'MRI and CT Scans';
    case RECIPES = 'Recipes';
    case ELECTRONIC_PRESCRIPTIONS = 'Electronic Prescriptions for Drugs';
    case MEDICATION_INSTRUCTIONS = 'Instructions for Using Medications';
    case LAB_REFERRALS = 'Referrals for Laboratory Tests';
    case SPECIALIST_REFERRALS = 'Referrals to Specialist Consultations';
    case HOSPITALIZATION_REFERRALS = 'Referrals for Hospitalization';
    case HEALTH_MONITORING_REPORTS = 'Health Monitoring Reports';
    case MEDICAL_CERTIFICATES = 'Medical Certificates';

    public static function all(): array
    {
        return [
            self::DISEASE_HISTORY->value,
            self::SURVEY_RESULTS->value,
            self::DIAGNOSTIC_REPORTS->value,
            self::XRAYS_AND_REPORTS->value,
            self::ULTRASOUND_EXAMINATIONS->value,
            self::MRI_CT_SCANS->value,
            self::RECIPES->value,
            self::ELECTRONIC_PRESCRIPTIONS->value,
            self::MEDICATION_INSTRUCTIONS->value,
            self::LAB_REFERRALS->value,
            self::SPECIALIST_REFERRALS->value,
            self::HOSPITALIZATION_REFERRALS->value,
            self::HEALTH_MONITORING_REPORTS->value,
            self::MEDICAL_CERTIFICATES->value,
        ];
    }
}

