import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchBloodPressure,
    updateBloodPressure,
    fetchHeartRate,
    updateHeartRate,
    fetchHeight,
    updateHeight,
    fetchWeight,
    updateWeight
} from './actions.ts';

interface MetricsState {
    bloodPressure: string;
    heartRate: number;
    height: number;
    weight: number;
    loading: boolean;
    error: string | null;
}

const initialState: MetricsState = {
    bloodPressure: '',
    heartRate: 0,
    height: 0,
    weight: 0,
    loading: false,
    error: null,
};

const patientProfileMetricsSlice = createSlice({
    name: 'patientProfileMetrics',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBloodPressure.fulfilled, (state, action: PayloadAction<string>) => {
                state.bloodPressure = action.payload;
            })
            .addCase(updateBloodPressure.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchHeartRate.fulfilled, (state, action: PayloadAction<number>) => {
                state.heartRate = action.payload;
            })
            .addCase(updateHeartRate.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchHeight.fulfilled, (state, action: PayloadAction<number>) => {
                state.height = action.payload;
            })
            .addCase(updateHeight.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(fetchWeight.fulfilled, (state, action: PayloadAction<number>) => {
                state.weight = action.payload;
            })
            .addCase(updateWeight.fulfilled, (state) => {
                state.loading = false;
            })
            .addMatcher(
                (action) =>
                    [fetchBloodPressure.pending, fetchHeartRate.pending, fetchHeight.pending, fetchWeight.pending].includes(action.type),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    [fetchBloodPressure.rejected, fetchHeartRate.rejected, fetchHeight.rejected, fetchWeight.rejected].includes(action.type),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to fetch metrics';
                }
            );
    },
});

export default patientProfileMetricsSlice.reducer;
