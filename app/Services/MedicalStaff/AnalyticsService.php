<?php

declare (strict_types = 1);

namespace App\Services\MedicalStaff;

use App\Enums\AppointmentType;
use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\MedicalExpense;
use App\Models\MedicalStaff\Payment;
use App\Models\PatientManagement\Appointment;
use App\Models\PatientManagement\PatientVisit;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class AnalyticsService
{
    public function index(): array
    {
        return  [
            'payment_report' => $this->paymentsReport(),
            'top_services' => $this->topServices(),
            'expenses' => $this->expenses(),
            'service_statistic' => $this->appointmentTypeStatistic(),
            'top_patient_visits_for_month' => $this->topPatientVisitsForMonth(),
            'payments' => $this->payments(),
        ];
    }

    private function paymentsReport(): array
    {
        $doctorId = Doctor::select('id')->where('user_id', Auth::id())->first()->id;

        $payments = Payment::selectRaw('SUM(amount) as total, DATE_FORMAT(created_at, "%Y-%m") as month')
            ->where('doctor_id', $doctorId)
            ->groupBy('month')
            ->orderBy('month', 'asc')
            ->get();

        $months = [];
        $totals = [];

        foreach ($payments as $payment) {
            $date = Carbon::createFromFormat('Y-m', $payment->month);
            $yearMonth = $date->format('F Y');

            $months[] = $yearMonth;
            $totals[] = $payment->total;
        }

        return [
            'month' => $months,
            'total' => $totals,
        ];

    }

    private function topServices(): array
    {
        $doctorId = Doctor::select('id')->where('user_id', Auth::id())->first()->id;

        $appointments = Appointment::where('doctor_id', $doctorId)
            ->with(['medicalService' => function ($query) {
                $query->select('id', 'name', 'price');
            }])
            ->select(['type', 'medical_service_id'])
            ->get();

        $topServices = [];

        foreach ($appointments as $appointment) {
            $service = $appointment->medicalService;
            $serviceName = $service->name;
            $serviceType = $appointment->type;

            $existingService = array_filter($topServices, function ($item) use ($serviceName, $serviceType) {
                return $item['service_name'] === $serviceName && $item['type'] === $serviceType;
            });

            if (!empty($existingService)) {
                $existingServiceKey = key($existingService);
                $topServices[$existingServiceKey]['service_count_used']++;
            } else {
                $topServices[] = [
                    'service_name' => $serviceName,
                    'type' => $serviceType,
                    'service_count_used' => 1,
                    'service_price' => $service->price,
                ];
            }
        }

        usort($topServices, function ($a, $b) {
            return $b['service_count_used'] <=> $a['service_count_used'];
        });

        return array_slice($topServices, 0, 5);
    }

    private function expenses(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $medicalExpenses = MedicalExpense::where('doctor_id', $doctorId)
            ->select(['medical_expense_type', 'amount'])
            ->get()
            ->groupBy('medical_expense_type')
            ->map(function ($expenses) {
                return $expenses->sum('amount');
            });

        $expenseTypes = $medicalExpenses->keys()->toArray();
        $expenseAmounts = $medicalExpenses->values()->toArray();

        return [
            'medical_expense_type' => $expenseTypes,
            'amount' => $expenseAmounts,
        ];

    }

    private function appointmentTypeStatistic(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $now = Carbon::now();
        $startOfWeek = $now->startOfWeek();
        $endOfWeek = $now->endOfWeek();

        $appointments = Appointment::select(DB::raw('DATE(created_at) as date'), DB::raw('COUNT(*) as count'), 'type')
            ->where('doctor_id', $doctorId)
            ->whereBetween('created_at', [$startOfWeek, $endOfWeek])
            ->groupBy('date', 'type')
            ->get();

        $offlineCounts = array_fill(0, 7, 0);
        $onlineCounts = array_fill(0, 7, 0);

        foreach ($appointments as $appointment) {
            $dayOfWeek = Carbon::parse($appointment->date)->dayOfWeek;

            if ($appointment->type === AppointmentType::OFFLINE) {
                $offlineCounts[$dayOfWeek] = $appointment->count;
            } else if ($appointment->type === AppointmentType::ONLINE) {
                $onlineCounts[$dayOfWeek] = $appointment->count;
            }
        }

        return [
            'patient_offline_service' => $offlineCounts,
            'patient_online_service' => $onlineCounts,
        ];
    }

    private function topPatientVisitsForMonth(): Collection
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $topPatients = PatientVisit::with(['patient' => function ($query) {
            $query->select('id', 'first_name', 'last_name', 'email');
        }])
            ->select('patient_id', DB::raw('COUNT(*) as visit_count'))
            ->where('doctor_id', $doctorId)
            ->groupBy('patient_id')
            ->orderByDesc('visit_count')
            ->limit(5)
            ->get();

        $formattedTopPatients = $topPatients->map(function ($item) {
            return [
                'id' => $item->patient->id,
                'patient_full_name' => $item->patient->first_name . ' ' . $item->patient->last_name,
                'patient_visits' => $item->visit_count,
                'patient_email' => $item->patient->email,
            ];
        });

        return $formattedTopPatients;
    }

    private function payments(): array
    {
        $doctorId = Doctor::where('user_id', Auth::id())->value('id');

        $payments = Payment::where('doctor_id', $doctorId)
            ->select('amount', 'created_at')
            ->get();

        $monthlyPayments = $payments->groupBy(function ($payment) {
            return Carbon::parse($payment->created_at)->format('F Y');
        })->map(function ($group) {
            return $group->sum('amount');
        });

        $month = $monthlyPayments->keys()->toArray();

        $amount = $monthlyPayments->values()->toArray();

        return [
            'month' => $month,
            'amount' => $amount,
        ];

    }
}
