

export type SalaryListByMonth = {
    id: number;
    title: string;
    document_type: string;
    patient_id: number;
    patient_full_name: string;
    date_of_birth: string;
    phone_number: string;
    email: string;
    created_at: string;
    payment_date: string;
    amount: number;
    payment_method: string;
    company_fee: number;
    doctor_wages: number;
}
export type SalaryCountData = {
    salary_for_next_date:string;
    doctor_full_name:string;
    total_patients: number;
    total_doctor_wages: number;
    bonus: number;
}

export type SalaryReportData = {
    salary_list_by_month: SalaryListByMonth[],
    salary_count: SalaryCountData
}

export type SalaryCountProps = {
    salaryCount: SalaryCountData
}

export type TableRowContentProps = {
    salary: SalaryListByMonth;
}

export interface SalaryReportState {
    loading: boolean;
    error: string | null;
    salaryListByMonth: SalaryListByMonth[];
    salaryCount: SalaryCountData;
}
