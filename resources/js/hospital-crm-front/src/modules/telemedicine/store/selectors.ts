import { RootState } from "../../../store/index.ts";

export const selectTelemedicineData = (state: RootState) => state.telemedicine;

export const selectMeetingList = (state: RootState) => selectTelemedicineData(state).meetingList;
export const selectMeetingCount = (state: RootState) => selectTelemedicineData(state).meetingCount;
export const selectMeetingFilter = (state: RootState) => selectTelemedicineData(state).meetingFilter;
export const selectLoading = (state: RootState) => selectTelemedicineData(state).loading;
export const selectError = (state: RootState) => selectTelemedicineData(state).error;
