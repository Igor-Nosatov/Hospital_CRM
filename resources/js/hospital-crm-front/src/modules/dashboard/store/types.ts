export type AppointmentScore = {
    total_appointments: number;
    total_online_appointments: number;
    total_offline_appointments: number;
};

export type Appointment = {
    id: number;
    patient_id: number;
    appointment_datetime: string;
    status: string;
    type: string;
    patient_full_name: string;
    patient_age: number;
    visits_count: number;
};

export type DoctorPersonalScore = {
    total_patients: number;
    month_list: string[];
    visit_list: number[];
    doctor_rank: number;
    current_year: number;
};

export type MedicalEvent = {
    id: number;
    name: string;
    organizer: string;
    event_date: string;
    language: string;
    url_img: string;
};

export type DashboardDataPayload = {
    appointment_score: AppointmentScore;
    first_appointments_today: Appointment[];
    doctor_personal_score: DoctorPersonalScore;
    new_medical_events: MedicalEvent[];
};

export type DashboardDataResponse = {
    data: DashboardDataPayload
};

export type DashboardState = {
    appointmentScore: AppointmentScore | null;
    firstAppointmentsToday: Appointment[];
    doctorPersonalScore: DoctorPersonalScore | null;
    newMedicalEvents: MedicalEvent[];
    loading: boolean;
    error: string | null;
};

export type AppointmentCounts = {
    total_appointments: number;
    total_online_appointments: number;
    total_offline_appointments: number;
};

export type AppointmentScoreCardProps = {
    countsAppointmentByType: AppointmentCounts | null;
};

export type CalendarModalProps = {
    isModalOpen: boolean;
    closeModal: () => void;
    selectedDateData: any; 
};

export type ApptCardProps = {
    todayAppointment: Appointment;
}

export type UpdateApptProps = {
    showModal: boolean;
    modalId: number | null;
    handleClose: () => void;
};