import { RootState } from "../../../store/index.ts";

export const selectDashboardData = (state: RootState) => state.dashboard;

export const selectAppointmentScore = (state: RootState) => selectDashboardData(state).appointmentScore;
export const selectFirstAppointmentsToday = (state: RootState) => selectDashboardData(state).firstAppointmentsToday;
export const selectDoctorPersonalScore = (state: RootState) => selectDashboardData(state).doctorPersonalScore;
export const selectNewMedicalEvents = (state: RootState) => selectDashboardData(state).newMedicalEvents;
export const selectLoading = (state: RootState) => selectDashboardData(state).loading;
export const selectError = (state: RootState) => selectDashboardData(state).error;
