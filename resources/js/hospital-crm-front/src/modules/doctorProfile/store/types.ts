export type PersonalInformation = {
    id: number;
    full_name: string;
    address: string;
    email: string;
    phone_number: string;
    education: string[];
    experience: string[];
    languages: string[];
    current_location: string[];
    certifications: string[];
    medical_license: string[];
    professional_memberships: string[];
    awards: string[];
    publications: string[];
    research_interests: string[];
};

export type PersonalInformationProps = {
    personalInformation:PersonalInformation
};

export type Visit = {
    patient_id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    visit_date: string;
    complaints: string;
    symptoms: string;
    treatment: string;
    notes: string;
};

export type VisitForMonthProps = {
    visitsForMonth: Visit[];
    visitsForMonthMeta:{
        current_page: number,
        last_page:  number,
        per_page:  number,
        total:  number,
    };
}


export type TimeSpentThisMonth = {
    offline: number;
    online: number;
    total: number;
};

export type  TimeSpentThisMonthProps = {
    timeSpentThisMonth: TimeSpentThisMonth
}

export type PatientsServedThisMonth = {
    all_patients: number;
    regular_patients: number;
    new_patients: number;
};

export type  PatientsServedThisMonthProps = {
    patientsServedThisMonth: PatientsServedThisMonth
}

export type NotificationsOverview = {
    total_notifications: number;
    unread_notifications: number;
    read_notifications: number;
};

export type NotificationsOverviewProps = {
    notificationsOverview:NotificationsOverview
};

export type PatientDemographics = {
    total_patients: number;
    adults: number;
    children: number;
};
export type PatientDemographicsProps = {
    patientDemographics:PatientDemographics
}
export type PatientPayments = {
    processed_payment: number;
    complete_payment: number;
    confirmed_payment: number;
};

export type PatientPaymentsProps = {
    patientPayments:PatientPayments
}

export type DoctorProfileState = {
    personalInformation: PersonalInformation;
    timeSpentThisMonth: TimeSpentThisMonth;
    patientsServedThisMonth: PatientsServedThisMonth;
    notificationsOverview: NotificationsOverview;
    patientDemographics: PatientDemographics;
    patientPayments: PatientPayments;
    visitsForMonthData: Visit[];
    visitsForMonthMeta: {
        current_page: number,
        last_page:  number,
        per_page:  number,
        total:  number,
    },
    loading: boolean;
    error: string | null;
};


