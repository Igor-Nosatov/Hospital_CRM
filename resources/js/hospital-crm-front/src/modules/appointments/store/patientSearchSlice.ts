import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPatientSearch } from "./actions";

interface PatientSearchState {
    patientSearch: any[];
    loading: boolean;
    error: string | null;
}

const initialState: PatientSearchState = {
    patientSearch: [],
    loading: false,
    error: null,
};

const patientSearchSlice = createSlice({
    name: "patientSearch",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatientSearch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientSearch.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.loading = false;
                state.patientSearch = action.payload;
            })
            .addCase(fetchPatientSearch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch patients";
            });
    },
});

export default patientSearchSlice.reducer;
