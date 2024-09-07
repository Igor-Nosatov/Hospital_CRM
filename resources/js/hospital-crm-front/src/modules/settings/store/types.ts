export type SettingItem = {
    id: number;
    setting_name: string;
    setting_type: string;
}

export type Data = {
    profile_settings: SettingItem[];
    insurance_settings: SettingItem[];
    billing_settings: SettingItem[];
    notification_settings: SettingItem[];
}

export type SettingState = {
    data: Data;
};

export type BillingSettingsProps = {
    billingOptionList: [];
}

export type InsuranceSettingsProps = {
    insuranceOptionList: [];
}

export type ProfileSettingsProps = {
    profileSettingsList: [];
}

export type NotificationOption = {
    id: string;
    setting_name: string;
    setting_desc: string;
    setting_status: string;
}

export type NotificationSettingsProps = {
    notificationOptionList: NotificationOption[];
}

export type ButtonStates = {
    education: boolean;
    experience: boolean;
    licenses: boolean;
    professionalMemberships: boolean;
    practiceLocation: boolean;
    patientReviews: boolean;
    specialties: boolean;
    boardCertifications: boolean;
}