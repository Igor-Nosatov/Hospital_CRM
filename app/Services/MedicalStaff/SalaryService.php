<?php

declare(strict_types=1);

namespace App\Services\MedicalStaff;

use App\Models\MedicalStaff\Doctor;
use App\Models\MedicalStaff\Payment;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;

class SalaryService
{
    public function index(): array
    {
        $month = Carbon::now()->month;
        $year = Carbon::now()->year;

        $doctor = $this->getAuthenticatedDoctor();
        $paymentsForMonth = $this->getPaymentsForMonth($doctor->id, $month, $year);

        return [
            'salary_list_by_month' => $this->mapPayments($paymentsForMonth),
            'salary_count' => $this->calculateSalaryCount($doctor, $paymentsForMonth),
        ];
    }

    private function getAuthenticatedDoctor(): Doctor
    {
        return Doctor::where('user_id', Auth::id())->select('id', 'first_name', 'last_name', 'created_at')->firstOrFail();
    }

    private function getPaymentsForMonth(int $doctorId, int $month, int $year): Collection
    {
        $startOfMonth = Carbon::create($year, $month)->startOfMonth();
        $endOfMonth = Carbon::create($year, $month)->endOfMonth();

        return Payment::where('doctor_id', $doctorId)
            ->whereBetween('payment_date', [$startOfMonth, $endOfMonth])
            ->with(['patient:id,first_name,last_name'])
            ->select([
                'id',
                'amount',
                'payment_date',
                'payment_method',
                'currency',
                'comments',
                'patient_id',
            ])->get();
    }

    private function mapPayments(Collection $payments): array
    {
        return $payments->map(function ($payment) {
            $patient = $payment->patient;
            return [
                'id' => $payment->id,
                'amount' => $payment->amount,
                'payment_date' => Carbon::parse($payment->payment_date)->format('d-m-Y'),
                'payment_method' => $payment->payment_method,
                'currency' => $payment->currency,
                'comments' => $payment->comments,
                'patient_full_name' => $patient ? $patient->first_name . ' ' . $patient->last_name : 'Unknown',
                'company_fee' => round($payment->amount * 0.4),
                'doctor_wages' => round($payment->amount * 0.6),
            ];
        })->toArray();
    }

    private function calculateSalaryCount(Doctor $doctor, Collection $payments): array
    {
        $totalPatients = $payments->unique('patient_id')->count();
        $totalDoctorWages = array_sum(array_column($this->mapPayments($payments), 'doctor_wages'));
        $bonus = $this->calculateBonus($doctor->created_at);
        $doctorFullName = $doctor->first_name . ' ' . $doctor->last_name;
        $month = Carbon::now()->format('F');
        $year = Carbon::now()->year;

        return [
            'salary_for_next_date' => $month . ' ' . $year,
            'doctor_full_name' => $doctorFullName,
            'total_patients' => $totalPatients,
            'total_doctor_wages' => round($totalDoctorWages),
            'bonus' => $bonus,
        ];
    }

    private function calculateBonus(Carbon $startDate): int
    {
        $monthsWorked = $startDate->diffInMonths(Carbon::now());

        return ($monthsWorked > 0 && $monthsWorked % 4 === 0) ? 100 : 0;
    }
}
