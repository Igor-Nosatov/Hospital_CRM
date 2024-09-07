import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchLatestDiseaseHistory,
    createDiseaseHistory
} from './actions.ts';

interface DiseaseHistoryState {
    diseaseHistory: any[];
    latestDiseaseHistoryData: any | null;
    diseaseHistoryData: any[];
    currentPageDiseaseHistory: number;
    totalPagesDiseaseHistory: number;
    loading: boolean;
    error: string | null;
    success: boolean;
}

const initialState: DiseaseHistoryState = {
    diseaseHistory: [],
    latestDiseaseHistoryData: null,
    diseaseHistoryData: [],
    currentPageDiseaseHistory: 1,
    totalPagesDiseaseHistory: 1,
    loading: false,
    error: null,
    success: false,
};

const patientProfileDiseaseHistorySlice = createSlice({
    name: 'patientProfileDiseaseHistory',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLatestDiseaseHistory.fulfilled, (state, action: PayloadAction<any>) => {
                state.latestDiseaseHistoryData = action.payload;
                state.loading = false;
            })
            .addCase(createDiseaseHistory.fulfilled, (state) => {
                state.success = true;
                state.loading = false;
            })
            .addMatcher(
                (action) =>
                    [fetchLatestDiseaseHistory.pending, createDiseaseHistory.pending].includes(action.type),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    [fetchLatestDiseaseHistory.rejected, createDiseaseHistory.rejected].includes(action.type),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to fetch or create disease history';
                }
            );
    },
});

export const { resetSuccess } = patientProfileDiseaseHistorySlice.actions;

export default patientProfileDiseaseHistorySlice.reducer;
