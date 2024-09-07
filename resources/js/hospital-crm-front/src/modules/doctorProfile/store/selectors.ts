import { RootState } from "../../../store/index.ts";

export const selectDoctorProfileData = (state: RootState) => state.doctorProfile;

export const selectPersonalInformation = (state: RootState) => selectDoctorProfileData(state).personalInformation;
export const selectTimeSpentThisMonth = (state: RootState) => selectDoctorProfileData(state).timeSpentThisMonth;
export const selectPatientsServedThisMonth = (state: RootState) => selectDoctorProfileData(state).patientsServedThisMonth;
export const selectNotificationsOverview = (state: RootState) => selectDoctorProfileData(state).notificationsOverview;
export const selectPatientDemographics = (state: RootState) => selectDoctorProfileData(state).patientDemographics;
export const selectPatientPayments = (state: RootState) => selectDoctorProfileData(state).patientPayments;
export const selectVisitsForMonth = (state: RootState) => selectDoctorProfileData(state).visitsForMonthData;
export const selectVisitsForMonthMeta = (state: RootState) => selectDoctorProfileData(state).visitsForMonthMeta;
export const selectLoading = (state: RootState) => selectDoctorProfileData(state).loading;
export const selectError = (state: RootState) => selectDoctorProfileData(state).error;

