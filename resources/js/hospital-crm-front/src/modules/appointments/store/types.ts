export interface Appointment {
    id: number;
    appointment_datetime: string;
    reason: string;
    status: string;
    type: string;
}

export interface AppointmentDetailsModalProps {
    appointment: Appointment;
    onClose: () => void;
}

export interface MedicalEvent {
    name: string;
    organizer: string;
    medical_event_type: string;
}

export interface MedicalEventDetailsModalProps {
    medicalEvent: MedicalEvent | null;
    onClose: () => void;
}

export interface Reminder {
    title: string;
    message: string;
}

export interface ReminderDetailsModalProps {
    reminder: Reminder | null;
    onClose: () => void;
}

export interface AppointmentCalendarProps {
    calendarData: {
        [dateStr: string]: {
            appointment_list: Appointment[];
            medical_event_list: MedicalEvent[];
            notification_list: Reminder[];
        };
    } | null;
}

export interface AppointmentData {
    appointment_datetime: string;
    reason: string;
    symptoms: string;
    notes: string;
    status: string;
    type: string;
    reminder_datetime: string;
    patient_id: number | null;
    doctor_id: number;
    medical_service_id: number | null;
}

export interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    appointmentType: string;
    appointmentStatus: string;
}

export interface MedicalService {
    id: number;
    name: string;
}

export interface MedicalServiceSelectProps {
    medicalServiceId: number | null;
    onSelect: (serviceId: number) => void;
}

export interface Patient {
    id: number;
    first_name: string;
    last_name: string;
}

export interface SearchSelectProps {
    onSelect: (patient: Patient) => void;
}

export interface SortBarProps {}

export interface SortBarState {
    isModalOpen: boolean;
    isMonthDropdownOpen: boolean;
    isYearDropdownOpen: boolean;
    selectedMonth: string;
    selectedYear: string;
}

export interface AppointmentCount {
    total_consultations_for_month: number;
    in_person_consultations: number;
    video_consultations: number;
    total_completed_consultations: number;
}

export interface ApptProps {
    appointmentCount: AppointmentCount;
}
