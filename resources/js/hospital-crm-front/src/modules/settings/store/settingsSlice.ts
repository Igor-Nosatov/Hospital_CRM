import { createSlice } from "@reduxjs/toolkit";
import { fetchSettingsData, updateSettingStatus } from "./actions.ts";
import { } from "./types.ts";

const initialState = {
    notificationOptionList: [],
    insuranceOptionList: [],
    billingOptionList: [],
    profileOptionList: [],
    loading: false,
    error: null as string | null,
};

// Create the slice
const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSettingsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSettingsData.fulfilled, (state, action) => {
                state.loading = false;
                state.notificationOptionList = action.payload.notification_settings;
                state.insuranceOptionList = action.payload.insurance_settings;
                state.billingOptionList = action.payload.billing_settings;
                state.profileOptionList = action.payload.profile_settings;
            })
            .addCase(fetchSettingsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(updateSettingStatus.fulfilled, (state, action) => {
                const { id, newStatus } = action.payload;
                state.notificationOptionList = state.notificationOptionList.map(notification =>
                    notification.id === id ? { ...notification, setting_status: newStatus } : notification
                );
            });
    },
});

export default settingsSlice.reducer;
