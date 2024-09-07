import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTreatmentPlan } from './actions.ts';

interface TreatmentState {
    treatmentData: any[];
    treatmentMeta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    loading: boolean;
    error: string | null;
}

const initialState: TreatmentState = {
    treatmentData: [],
    treatmentMeta: {
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    },
    loading: false,
    error: null,
};

const patientProfileTreatmentSlice = createSlice({
    name: 'patientProfileTreatment',
    initialState,
    reducers: {
        resetTreatmentPlan: (state) => {
            state.treatmentData = [];
            state.treatmentMeta = {
                current_page: 1,
                last_page: 1,
                per_page: 10,
                total: 0,
            };
            state.loading = false;
            state.error = null;
        },
        setCurrentPageTreatment: (state, action: PayloadAction<number>) => {
            state.treatmentMeta.current_page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTreatmentPlan.fulfilled, (state, action: PayloadAction<any>) => {
                state.treatmentData = action.payload.data.treatmentPlanData;
                state.treatmentMeta = action.payload.data.meta;
                state.loading = false;
            })
            .addMatcher(
                (action) =>
                    [fetchTreatmentPlan.pending].includes(action.type),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    [fetchTreatmentPlan.rejected].includes(action.type),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to load treatment plan';
                }
            );
    },
});

export const { resetTreatmentPlan, setCurrentPageTreatment } = patientProfileTreatmentSlice.actions;

export default patientProfileTreatmentSlice.reducer;
