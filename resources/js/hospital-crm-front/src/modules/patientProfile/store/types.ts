export type GeneralInfo = {
    full_name: string;
    religion: string;
    date_of_birth: string;
    address: string;
    identity_code: string;
    phone_number: string;
    email: string;
    height: string;
    weight: string;
    blood_pressure: string;
    heart_rate: string;
}

export type LaboratoryTest = {
    id: number;
    date_of_medical_analysis: string;
    title: string;
    file_path: string;
}

export type TreatmentPlanData = {
    medicament_name: string;
    medication_dosage: string;
    medication_frequency: string;
    medication_timing: string;
}

export type DiseaseHistoryData = {
    date_of_onset: string;
    diagnosis: string;
    test_results: string;
    symptoms: string;
}

export type ApptDetailProps = {
    appointmentId: number | null;
    showModal: boolean;
    handleClose: () => void;
}

export type Appointment = {
    id: number;
    appointment_datetime: string;
    type: string;
    status: string;
}

export type AppointmentListProps = {
    patientId: string;
}

export type CreateNewDiseaseHistoryProps = {
    patientId: string;
    modalId: string;
    onClose: () => void;
}

export type DiseaseHistoryProps = {
    patientId: number;
}

export type DiseaseHistoryEntry = {
    id: number;
    date_of_onset: string;
    diagnosis: string;
    symptoms: string;
    treatment: string;
    previous_interventions: string;
    test_results: string;
    progress: string;
    notes: string;
}

export type ShowAllDiseaseHistoryProps = {
    modalId: string;
    patientId: number;
    onClose: () => void;
}


export type ProfileCardProps = {
    generalInfo: GeneralInfo;
    patientId: number;
}

export type EditPatientProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type EditBloodPressureProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type EditHeartRateProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type EditHeightProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type EditWeightProps = {
    show: boolean;
    handleClose: () => void;
    patientId: number;
}

export type FetchAppointmentsPayload = {
    patientId: number;
    searchTerm: string;
    currentPage: number;
}

export type FetchAppointmentsResponse = {
    appointmentList: Appointment[];
    totalPagesApptList: number;
}

export type UploadFileParams = {
    file: File;
    title: string;
    date: string;
    patientId: string;
    doctorId: string;
}

