import { RootState } from "../../../store/index.ts";

export const selectPatientDocumentData = (state: RootState) => state.patientDocument;

export const selectDocumentList = (state: RootState) => selectPatientDocumentData(state).documentList;
export const selectDocumentMetaData = (state: RootState) => selectPatientDocumentData(state).documentMetaData;
export const selectLoading = (state: RootState) => selectPatientDocumentData(state).loading;
export const selectError = (state: RootState) => selectPatientDocumentData(state).error;
export const selectCurrentPage = (state: RootState) => selectPatientDocumentData(state).currentPage;
export const selectSearchQuery = (state: RootState) => selectPatientDocumentData(state).searchQuery;


