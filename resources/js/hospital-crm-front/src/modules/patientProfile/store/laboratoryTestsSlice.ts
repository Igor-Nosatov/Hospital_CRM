import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchLabTestList,
    uploadLabTest
} from './actions.ts';

interface LaboratoryTestsState {
    laboratoryTests: any[];
    metaLaboratoryTests: any[];
    currentPageLaboratoryTests: number;
    loading: boolean;
    error: string | null;
    success: boolean | null;
}

const initialState: LaboratoryTestsState = {
    laboratoryTests: [],
    metaLaboratoryTests: [],
    currentPageLaboratoryTests: 1,
    loading: false,
    error: null,
    success: null,
};

const laboratoryTestsSlice = createSlice({
    name: 'laboratoryTests',
    initialState,
    reducers: {
        setCurrentPageLaboratoryTests: (state, action: PayloadAction<number>) => {
            state.currentPageLaboratoryTests = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLabTestList.fulfilled, (state, action: PayloadAction<any>) => {
                state.laboratoryTests = action.payload.medicalTestData;
                state.metaLaboratoryTests = action.payload.meta;
                state.currentPageLaboratoryTests = action.payload.meta.page;
                state.loading = false;
            })
            .addCase(uploadLabTest.fulfilled, (state, action: PayloadAction<any>) => {
                state.success = true;
                state.loading = false;
            })
            .addMatcher(
                (action) =>
                    [fetchLabTestList.pending, uploadLabTest.pending].includes(action.type),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    [fetchLabTestList.rejected, uploadLabTest.rejected].includes(action.type),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to fetch or upload laboratory tests';
                }
            );
    },
});

export default laboratoryTestsSlice.reducer;
