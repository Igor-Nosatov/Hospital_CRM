import { RootState } from "../../../store/index.ts";

export const selectPatientList = (state: RootState) => state.patient.patientList;
export const selectPatientMetaData = (state: RootState) => state.patient.patientMetaData;
export const selectGeneralInfo = (state: RootState) => state.patient.generalInfo;
export const selectLoading = (state: RootState) => state.patient.loading;
export const selectError = (state: RootState) => state.patient.error;
export const selectCurrentPage = (state: RootState) => state.patient.currentPage;
export const selectSearchQuery = (state: RootState) => state.patient.searchQuery;
export const selectDiseaseHistory = (state: RootState) => state.diseaseHistory.data;

