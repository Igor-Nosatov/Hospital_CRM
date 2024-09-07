import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchMedicalEventsData, fetchMedicalEventByIdData, submitFeedback } from "./actions.ts";
import { EventAgenda, MedicalEventData } from "./types.ts";

const initialState = {
    medicalEventsList: [] as MedicalEventData[],
    medicalEventAgenda: [] as EventAgenda[],
    medicalEventId: '',
    medicalEventsMetaData: [],
    currentPage: 1,
    loading: false,
    error: null,
};

const medicalEventSlice = createSlice({
    name: "medicalEvents",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedicalEventsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMedicalEventsData.fulfilled, (state, action) => {
                state.loading = false;
                state.medicalEventsList = action.payload.medical_event_data;
                state.medicalEventsMetaData = action.payload.meta;
            })
            .addCase(fetchMedicalEventsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(fetchMedicalEventByIdData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMedicalEventByIdData.fulfilled, (state, action) => {
                state.loading = false;
                state.medicalEventAgenda = action.payload.medical_event_agenda;
                state.medicalEventId = action.payload.medical_event_id;
            })
            .addCase(fetchMedicalEventByIdData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(submitFeedback.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitFeedback.fulfilled, (state) => {
                state.loading = false;
                // Handle successful submission if needed
            })
            .addCase(submitFeedback.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to submit feedback";
            });
    },
});

export const { setPage } =  medicalEventSlice.actions;

export default medicalEventSlice.reducer;
