import { createSlice } from "@reduxjs/toolkit";
import { fetchAnalyticsData } from "./actions.ts";

const initialState = {
    earningReport: [],
    topServices: [],
    expenses: { medical_expense_type:[], amount:[] },
    serviceStatistic: { patient_offline_service:[], patient_online_service:[]},
    topPatientVisitsForMonth: [],
    payments: { month: [], amount: [] },
    loading: false,
    error: null as string | null,
};

const analyticsSlice = createSlice({
    name: "analytics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnalyticsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnalyticsData.fulfilled, (state, action) => {
                state.loading = false;
                state.earningReport = action.payload.payment_report || [];
                state.topServices = action.payload.top_services || [];
                state.expenses = action.payload.expenses || [];
                state.serviceStatistic = action.payload.service_statistic || [];
                state.topPatientVisitsForMonth = action.payload.top_patient_visits_for_month || [];
                state.payments = action.payload.payments || [];
            })
            .addCase(fetchAnalyticsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export default analyticsSlice.reducer;
