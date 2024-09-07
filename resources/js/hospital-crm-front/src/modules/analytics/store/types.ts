export type EarningReport = {
    month: string[];
    total: number[];
}

export type ServiceStatistic = {
    patient_offline_service: number[];
    patient_online_service: number[];
}

export type Visit = {
    id: number;
    patient_full_name: string;
    patient_visits: number;
    patient_email: string;
}

export type Payment = {
    month: string[];
    amount: number[];
}

export type TopService = {
    service_name: string;
    type: string;
    service_count_used: number;
    service_price: number;
}

export type AnalyticsData = {
    payment_report: Payment;
    top_services: TopService[];
    expenses: Expense;
    service_statistic: ServiceStatistic;
    top_patient_visits_for_month: Visit[];
    payments: Payment;
}

export type EarningReportProps = {
    earningReport: EarningReport | null;
}

export type PatientVisitsForMonthProps = {
    topPatientVisitsForMonth: Visit[];
}

export type PaymentsProps = {
    payments: Payment;
}

export type ServiceStatisticProps = {
    serviceStatistic: ServiceStatistic;
}

export type TopServicesProps = {
    topServices: TopService[];
}

export type Expense = {
    medical_expense_type: string[];
    amount: number[];
}

export type  ExpensesProps = {
    expenses: Expense;
}
