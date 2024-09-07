import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAppointmentDetails, retrieveDashboardData, updateAppointment } from "./actions";
import { DashboardState, DashboardDataPayload } from "./types";

const initialState = {
    appointment:[],
    appointmentScore: null,
    firstAppointmentsToday: [],
    doctorPersonalScore: null,
    newMedicalEvents: [],
    loading: false,
    error: null,
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveDashboardData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(retrieveDashboardData.fulfilled, (state, action: PayloadAction<DashboardDataPayload>) => {
                state.loading = false;
                state.appointmentScore = action.payload.appointment_score;
                state.firstAppointmentsToday = action.payload.first_appointments_today;
                state.doctorPersonalScore = action.payload.doctor_personal_score;
                state.newMedicalEvents = action.payload.new_medical_events;
            })
            .addCase(retrieveDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(fetchAppointmentDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(fetchAppointmentDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.appointment = action.payload;
              })
              .addCase(fetchAppointmentDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch appointment details";
              })
            .addCase(updateAppointment.fulfilled, (state, action) => {
                state.loading = false;
                const updatedAppointment = action.payload;
                state.firstAppointmentsToday = state.firstAppointmentsToday.map((appointment) => {
                  if (appointment.id === updatedAppointment.id) {
                    return updatedAppointment;
                  }
                  return appointment;
                });
              })
    },
});

export default dashboardSlice.reducer;
