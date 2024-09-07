import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMedicalService } from "./actions";

interface MedicalServiceState {
    medicalServices: any[];
    loading: boolean;
    error: string | null;
}

const initialState: MedicalServiceState = {
    medicalServices: [],
    loading: false,
    error: null,
};

const medicalServiceSlice = createSlice({
    name: "medicalService",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedicalService.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMedicalService.fulfilled, (state, action: PayloadAction<{ data: any[] }>) => {
                state.loading = false;
                state.medicalServices = action.payload.data;
                state.error = null;
            })
            .addCase(fetchMedicalService.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch medical services";
            });
    },
});

export default medicalServiceSlice.reducer;
