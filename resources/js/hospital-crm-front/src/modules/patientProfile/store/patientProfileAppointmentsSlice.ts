import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchAppointments,
    fetchAppointmentById
} from './actions.ts';

interface AppointmentsState {
    appointmentList: any[];
    appointmentDataById: any[];
    totalPagesApptList: number;
    loading: boolean;
    error: string | null;
}

const initialState: AppointmentsState = {
    appointmentList: [],
    appointmentDataById: [],
    totalPagesApptList: 1,
    loading: false,
    error: null,
};

const patientProfileAppointmentsSlice = createSlice({
    name: 'patientProfileAppointments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppointments.fulfilled, (state, action: PayloadAction<any>) => {
                state.appointmentList = action.payload.appointmentList;
                state.totalPagesApptList = action.payload.totalPagesApptList;
                state.loading = false;
            })
            .addCase(fetchAppointmentById.fulfilled, (state, action: PayloadAction<any>) => {
                state.appointmentDataById = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addMatcher(
                (action) =>
                    [fetchAppointments.pending, fetchAppointmentById.pending].includes(action.type),
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )
            .addMatcher(
                (action) =>
                    [fetchAppointments.rejected, fetchAppointmentById.rejected].includes(action.type),
                (state, action) => {
                    state.loading = false;
                    state.error = action.error.message || 'Failed to fetch appointments';
                }
            );
    },
});

export default patientProfileAppointmentsSlice.reducer;
