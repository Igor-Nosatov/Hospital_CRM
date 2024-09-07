import { RootState } from "../../../store/index.ts";

// Selectors for General Info
export const selectGeneralInfo = (state: RootState) => state.patientProfileGeneralInfo.generalInfo;
export const selectLoadingGeneralInfo = (state: RootState) => state.patientProfileGeneralInfo.loading;
export const selectErrorGeneralInfo = (state: RootState) => state.patientProfileGeneralInfo.error;

// Selectors for Appointments
export const selectAppointmentList = (state: RootState) => state.patientProfileAppointments.appointmentList;
export const selectAppointmentDataById = (state: RootState) => state.patientProfileAppointments.appointmentDataById;
export const selectTotalPages = (state: RootState) => state.patientProfileAppointments.totalPagesApptList;
export const selectLoadingAppointments = (state: RootState) => state.patientProfileAppointments.loading;
export const selectErrorAppointments = (state: RootState) => state.patientProfileAppointments.error;

// Selectors for Metrics
export const selectBloodPressure = (state: RootState) => state.patientProfileMetrics.bloodPressure;
export const selectHeartRate = (state: RootState) => state.patientProfileMetrics.heartRate;
export const selectHeight = (state: RootState) => state.patientProfileMetrics.height;
export const selectWeight = (state: RootState) => state.patientProfileMetrics.weight;
export const selectLoadingMetrics = (state: RootState) => state.patientProfileMetrics.loading;
export const selectErrorMetrics = (state: RootState) => state.patientProfileMetrics.error;

// Selectors for Disease History
export const selectDiseaseHistory = (state: RootState) => state.patientProfileDiseaseHistory.diseaseHistory;
export const selectDiseaseLatestHistory = (state: RootState) => state.patientProfileDiseaseHistory.latestDiseaseHistoryData;
export const selectDiseaseHistoryData = (state: RootState) => state.patientProfileDiseaseHistory.diseaseHistoryData;
export const selectCurrentPageDiseaseHistory = (state: RootState) => state.patientProfileDiseaseHistory.currentPageDiseaseHistory;
export const selectPagesDiseaseHistory = (state: RootState) => state.patientProfileDiseaseHistory.totalPagesDiseaseHistory;
export const selectLoadingDiseaseHistory = (state: RootState) => state.patientProfileDiseaseHistory.loading;
export const selectErrorDiseaseHistory = (state: RootState) => state.patientProfileDiseaseHistory.error;

// Selectors for Laboratory Tests
export const selectLaboratoryTests = (state: RootState) => state.laboratoryTests.laboratoryTests;
export const selectMetaDataLaboratoryTests = (state: RootState) => state.laboratoryTests.metaLaboratoryTests;
export const selectCurrentPageLaboratoryTests = (state: RootState) => state.laboratoryTests.currentPageLaboratoryTests;
export const selectLoadingLaboratoryTests = (state: RootState) => state.laboratoryTests.loading;
export const selectErrorLaboratoryTests = (state: RootState) => state.laboratoryTests.error;
