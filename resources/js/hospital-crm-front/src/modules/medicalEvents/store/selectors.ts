import { RootState } from "../../../store/index.ts";

export const selectMedicalEventData = (state: RootState) => state.medicalEvents;

export const selectMedicalEventsList = (state: RootState) => selectMedicalEventData(state).medicalEventsList;
export const selectMedicalEventsMetaData = (state: RootState) => selectMedicalEventData(state).medicalEventsMetaData;
export const selectCurrentPage = (state: RootState) => selectMedicalEventData(state).currentPage;
export const selectMedicalEventAgenda = (state: RootState) => selectMedicalEventData(state).medicalEventAgenda;
export const selectMedicalEventId = (state: RootState) => selectMedicalEventData(state).medicalEventId;
export const selectLoading = (state: RootState) => selectMedicalEventData(state).loading;
export const selectError = (state: RootState) => selectMedicalEventData(state).error;
