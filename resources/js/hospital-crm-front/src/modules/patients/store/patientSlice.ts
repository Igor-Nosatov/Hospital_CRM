import { createSlice } from "@reduxjs/toolkit";
import {
    fetchPatientPaginationData,
    addNewPatient,
    updatePatient,
    deletePatient,
    fetchPatientProfile
} from "./actions.ts";
import { PatientState } from "./types.ts";

const initialState: PatientState = {
    patientList: null,
    patientMetaData: null,
    generalInfo: null,
    currentPage: 1,
    searchQuery: "",
    loading: false,
    error: null,
};

const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatientProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientProfile.fulfilled, (state, action) => {
                state.generalInfo = action.payload.data.general_info;
                state.loading = false;
            })
            .addCase(fetchPatientProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to load patient profile';
            })
            .addCase(fetchPatientPaginationData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientPaginationData.fulfilled, (state, action) => {
                state.loading = false;
                state.patientList = action.payload.patient_data;
                state.patientMetaData = action.payload.meta;
            })
            .addCase(fetchPatientPaginationData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(addNewPatient.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addNewPatient.fulfilled, (state, action) => {
                state.loading = false;
                if (state.patientList) {
                    state.patientList.push(action.payload);
                } else {
                    state.patientList = [action.payload];
                }
            })
            .addCase(addNewPatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to add patient";
            })
            .addCase(updatePatient.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePatient.fulfilled, (state, action) => {
                state.loading = false;
                if (state.patientList) {
                    const index = state.patientList.findIndex(
                        (patient) => patient.id === action.payload.id
                    );
                    if (index !== -1) {
                        state.patientList[index] = action.payload;
                    }
                }
            })
            .addCase(updatePatient.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to update patient";
            })

            .addCase(deletePatient.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePatient.fulfilled, (state, action) => {
                state.loading = false;
                if (state.patientList) {
                    state.patientList = state.patientList.filter(
                        (patient) => patient.id !== action.payload
                    );
                }
            })
            .addCase(deletePatient.rejected, (state, action) => {
                state.loading = false;
                state.error =
                    action.payload || action.error.message || "Failed to delete patient";
            });
    },
});

export const { setPage, setSearchQuery } = patientSlice.actions;

export default patientSlice.reducer;
