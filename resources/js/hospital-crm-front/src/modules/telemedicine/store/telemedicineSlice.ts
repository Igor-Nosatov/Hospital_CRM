import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTelemedicinePaginationData } from "./actions.ts";
import { MeetingCount, MeetingItem, MeetingStatus, TelemedicinePayload } from "./types.ts";

interface TelemedicineState {
    meetingList: MeetingItem[];
    meetingCount: MeetingCount;
    meetingFilter: MeetingStatus[];
    loading: boolean;
    error: string | null;
}

const initialState: TelemedicineState = {
    meetingList: [],
    meetingCount: {
        total_meetings_for_month: 0,
        cancelled_meetings: 0,
        active_meetings: 0,
        completed_meetings: 0,
    },
    meetingFilter: [],
    loading: false,
    error: null,
};

// Create the slice
const telemedicineSlice = createSlice({
    name: "telemedicine",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTelemedicinePaginationData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTelemedicinePaginationData.fulfilled, (state, action: PayloadAction<TelemedicinePayload>) => {
                state.loading = false;
                state.meetingList = action.payload.meeting_list;
                state.meetingCount = action.payload.meeting_count;
                state.meetingFilter = action.payload.meeting_filter;
            })
            .addCase(fetchTelemedicinePaginationData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export default telemedicineSlice.reducer;
