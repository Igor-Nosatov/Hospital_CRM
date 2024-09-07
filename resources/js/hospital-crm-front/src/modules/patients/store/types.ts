// types.ts

export type Appointment = {
    id: number;
    patient_id: number;
    created_at: string;
};

export type PatientVisit = {
    id: number;
    patient_id: number;
    created_at: string;
};

export type PatientData = {
    id: number;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    marital_status: string;
    phone_number: string;
    email: string;
    appointments: Appointment[];
    patient_visits: PatientVisit[];
};

export type PageLink = {
    url: string | null;
    label: string;
    active: boolean;
};

export type PatientMetaData = {
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PageLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
};

export type PatientPaginationData = {
    meta: PatientMetaData;
    patient_data: PatientData[];
};

export type PatientDataResponse = {
    data: PatientPaginationData;
};

// export type PatientState = {
//     patientPaginationData: PatientPaginationData | null;
//     loading: boolean;
//     error: string | null;
// };

export type InputFieldProps = {
    label: string;
    name: string;
    type?: string;
    options?: string[];
    required?: boolean;
    disabled?: boolean;
    value?: string;
}

export type DiseaseHistoryData = {
    date_of_onset: string;
    diagnosis: string;
    test_results: string;
    symptoms: string;
}

export type PatientDataUpdate = {
    first_name: string;
    last_name: string;
    religion: string;
    date_of_birth: string;
    address: string;
    identity_code: string;
    phone_number: string;
    email: string;
}

export type DiseaseHistoryProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type EditPatientProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type PaginationProps = {
    patientMetaData: {
        current_page: number;
        last_page: number;
    };
    onPageChange: (page: number) => void;
}

export type TableRowContentProps = {
    patient: PatientData;
    onDelete: (id: number) => void;
}

export type TitleBarProps = {
    onSearch: (search: string) => void;
}

export type GeneralInfo = {
    full_name: string;
    religion: string;
    date_of_birth: string;
    address: string;
    identity_code: string;
    phone_number: string;
    email: string;
    occupation: string;
    legal_representative_first_name: string;
    legal_representative_last_name: string;
    legal_representative_relationship: string;
    legal_representative_phone_number: string;
    marital_status: string;
    status: string;
    insurance_id: string;
    doctor_id: string;
}

export type PatientState = {
    generalInfo: any | [];
    patientList: PatientData[] | null;
    patientMetaData: PatientMetaData | null;
    currentPage: number;
    searchQuery: string;
    loading: boolean;
    error: string | null;
}