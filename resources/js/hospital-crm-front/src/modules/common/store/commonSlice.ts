import { createSlice } from "@reduxjs/toolkit";
import { createHelpDeskQuery, fetchNotifications, searchPatients } from "./actions";

const initialState = {
    loading: false,
    error: null,
    helpDeskQuery: [],
    notificationData: [],
    notificationMeta: null,
    notificationCurrentPage: 1,
    searchPatient: []
};

const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        // You can add additional reducers here if needed
    },
    extraReducers: (builder) => {
        builder
            .addCase(createHelpDeskQuery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createHelpDeskQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.helpDeskQuery = action.payload;
            })
            .addCase(createHelpDeskQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchNotifications.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNotifications.fulfilled, (state, action) => {
                state.loading = false;
                state.notificationData = action.payload.notification_data;
                state.notificationMeta = action.payload.meta;
                state.notificationCurrentPage = action.meta.current_page;
            })
            .addCase(fetchNotifications.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(searchPatients.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.searchPatient = [];
            })
            .addCase(searchPatients.fulfilled, (state, action) => {
                state.loading = false;
                state.searchPatient = action.payload;
            })
            .addCase(searchPatients.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default commonSlice.reducer;
