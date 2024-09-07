import { useState } from 'react';

export const useModal = () => {
    const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
    const [selectedMedicalEvent, setSelectedMedicalEvent] = useState<any>(null);
    const [selectedReminder, setSelectedReminder] = useState<any>(null);

    const openAppointmentModal = (appointment: any) => setSelectedAppointment(appointment);
    const closeAppointmentModal = () => setSelectedAppointment(null);

    const openMedicalEventModal = (medicalEvent: any) => setSelectedMedicalEvent(medicalEvent);
    const closeMedicalEventModal = () => setSelectedMedicalEvent(null);

    const openReminderModal = (reminder: any) => setSelectedReminder(reminder);
    const closeReminderModal = () => setSelectedReminder(null);

    return {
        selectedAppointment,
        openAppointmentModal,
        closeAppointmentModal,
        selectedMedicalEvent,
        openMedicalEventModal,
        closeMedicalEventModal,
        selectedReminder,
        openReminderModal,
        closeReminderModal,
    };
};
