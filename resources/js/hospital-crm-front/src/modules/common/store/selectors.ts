import { RootState } from "../../../store";

export const selectCommonData = (state: RootState) => state.common;

export const selectNotificationData = (state: RootState) => selectCommonData(state).notificationData;
export const selectNotificationMeta = (state: RootState) => selectCommonData(state).notificationMeta;
export const selectNotificationCurrentPage = (state: RootState) => selectCommonData(state).notificationCurrentPage;
export const selectSearchPatient = (state: RootState) => selectCommonData(state).searchPatient;
export const selectLoading = (state: RootState) => selectCommonData(state).loading;
export const selectError = (state: RootState) => selectCommonData(state).error;
