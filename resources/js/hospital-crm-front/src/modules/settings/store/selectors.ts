import { RootState } from "../../../store/index.ts";

export const selectPatientData = (state: RootState) => state.settings;

export const selectNotificationOptionList= (state: RootState) => selectPatientData(state).notificationOptionList;
export const selectInsuranceOptionList = (state: RootState) => selectPatientData(state).insuranceOptionList;
export const selectBillingOptionList = (state: RootState) => selectPatientData(state).billingOptionList;
export const selectProfileOptionList = (state: RootState) => selectPatientData(state).profileOptionList;
export const selectLoading = (state: RootState) => selectPatientData(state).loading;
export const selectError = (state: RootState) => selectPatientData(state).error;


