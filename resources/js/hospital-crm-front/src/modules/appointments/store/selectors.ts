import { RootState } from "../../../store/index";
import { AppointmentCount } from "./types";


export const selectAppointmentState = (state: RootState) => state.appointment;

export const selectAppointmentData = (state: RootState) => selectAppointmentState(state).calendarData;

export const selectAppointmentCount = (state: RootState): AppointmentCount => {
    const appointmentState = selectAppointmentState(state);
    return appointmentState.appointmentCount || {
        total_consultations_for_month: 0,
        in_person_consultations: 0,
        video_consultations: 0,
        total_completed_consultations: 0
    };
};

export const getSelectedMonth = (state: RootState) => selectAppointmentState(state).selectedMonth;
export const getMedicalService = (state: RootState) => state.medicalService.medicalServices;
export const getSelectedYear = (state: RootState) => selectAppointmentState(state).selectedYear;
export const getSelectedPatientSearch = (state: RootState) => state.patientSearch.patientSearch;

export const selectLoading = (state: RootState) => selectAppointmentState(state).loading;
export const selectError = (state: RootState) => selectAppointmentState(state).error;
