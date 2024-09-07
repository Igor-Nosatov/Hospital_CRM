<?php

namespace Database\Seeders;

use App\Enums\SettingType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('settings')->insert(
            [
                [
                    'setting_name' => 'News Notification',
                    'setting_desc' => 'Receive notifications for the latest news and updates.',
                    'setting_status' => 'enabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Education',
                    'setting_desc' => 'Manage your educational qualifications and degrees.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Experience',
                    'setting_desc' => 'Track your professional experience and job history.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Licenses',
                    'setting_desc' => 'Keep your professional licenses up to date.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Professional Memberships',
                    'setting_desc' => 'Manage your memberships in professional organizations.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Practice Location',
                    'setting_desc' => 'Update and maintain your practice locations.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Patient Reviews',
                    'setting_desc' => 'View and respond to patient reviews and feedback.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Specialties',
                    'setting_desc' => 'Manage your medical specialties and areas of expertise.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Board Certifications',
                    'setting_desc' => 'Keep your board certifications up to date.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::PROFILE,
                ],
                [
                    'setting_name' => 'Insurance Plan',
                    'setting_desc' => 'Manage accepted insurance plans and policies.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Authorization Requirements',
                    'setting_desc' => 'Define and update insurance authorization requirements.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Insurance Verification',
                    'setting_desc' => 'Verify patient insurance coverage and eligibility.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Pharmacy Networks',
                    'setting_desc' => 'Manage networks of pharmacies covered by insurance.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Referral Policies',
                    'setting_desc' => 'Update policies for patient referrals.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Network Coverage',
                    'setting_desc' => 'Define areas and conditions covered by insurance networks.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Copayment',
                    'setting_desc' => 'Set and update copayment policies for services.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Submission Preferences',
                    'setting_desc' => 'Manage preferences for insurance submissions.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Reimbursement',
                    'setting_desc' => 'Define policies for insurance reimbursements.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Coverage Exceptions and Limitations',
                    'setting_desc' => 'Outline exceptions and limitations for insurance coverage.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Claim Denials',
                    'setting_desc' => 'Manage and track insurance claim denials.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Compliance Reporting',
                    'setting_desc' => 'Generate reports for insurance compliance.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::INSURANCE,
                ],
                [
                    'setting_name' => 'Claim Submission',
                    'setting_desc' => 'Submit insurance claims for reimbursement.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Remittance Advice',
                    'setting_desc' => 'Receive remittance advice for submitted claims.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Denial Management',
                    'setting_desc' => 'Manage denied insurance claims effectively.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Billing Code',
                    'setting_desc' => 'Define and manage billing codes for services.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Claim Status Tracking',
                    'setting_desc' => 'Track the status of submitted insurance claims.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Payment Posting',
                    'setting_desc' => 'Post payments received from insurance claims.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Insurance Fee',
                    'setting_desc' => 'Manage fees associated with insurance plans.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Superbills',
                    'setting_desc' => 'Generate superbills for patient billing.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Financial Analytics',
                    'setting_desc' => 'Analyze financial data for better decision-making.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Integrated Payment',
                    'setting_desc' => 'Integrate payment solutions with billing systems.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Contractual Adjustment',
                    'setting_desc' => 'Manage adjustments based on contracts with insurers.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Billing Audit',
                    'setting_desc' => 'Conduct audits of billing processes and systems.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::BILLING,
                ],
                [
                    'setting_name' => 'Upcoming Appointment',
                    'setting_desc' => 'Get notifications for upcoming appointments.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Lab Test Results',
                    'setting_desc' => 'Receive notifications when lab test results are available.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Follow-up Appointment',
                    'setting_desc' => 'Get reminders for follow-up appointments.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Prescription Request',
                    'setting_desc' => 'Receive notifications for new prescription requests.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Patient Data Update Reminder',
                    'setting_desc' => 'Get reminders to update patient data.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Consultation Request',
                    'setting_desc' => 'Receive notifications for new consultation requests.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Patient Insurance Status',
                    'setting_desc' => 'Get updates on patient insurance status.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Diagnostic Procedure',
                    'setting_desc' => 'Receive notifications for scheduled diagnostic procedures.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Authorization Request',
                    'setting_desc' => 'Get updates on authorization requests.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Financial Transaction',
                    'setting_desc' => 'Receive notifications for financial transactions.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Check-in Reminder',
                    'setting_desc' => 'Get reminders for patient check-ins.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Medication Adherence',
                    'setting_desc' => 'Receive notifications to remind patients about medication adherence.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Critical Test',
                    'setting_desc' => 'Receive notifications for critical test results.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
                [
                    'setting_name' => 'Promotion',
                    'setting_desc' => 'Receive notifications for promotions and special offers.',
                    'setting_status' => 'disabled',
                    'setting_type' => SettingType::NOTIFICATION,
                ],
            ]
        );
    }
}
