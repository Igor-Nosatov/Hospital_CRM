import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPatientProfile } from './actions.ts';

interface GeneralInfoState {
    generalInfo: any | [];
    loading: boolean;
    error: string | null;
}

const initialState: GeneralInfoState = {
    generalInfo: [],
    loading: false,
    error: null,
};

const patientProfileGeneralInfoSlice = createSlice({
    name: 'patientProfileGeneralInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatientProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientProfile.fulfilled, (state, action: PayloadAction<any>) => {
                state.generalInfo = action.payload.data.general_info;
                state.loading = false;
            })
            .addCase(fetchPatientProfile.rejected, (state) => {
                state.loading = false;
                state.error = 'Failed to load patient profile';
            });
    },
});

export default patientProfileGeneralInfoSlice.reducer;
