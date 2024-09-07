import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAppointmentData, createAppointment } from "./actions";

interface AppointmentState {
    appointmentCount: {
        total_consultations_for_month: number;
        in_person_consultations: number;
        video_consultations: number;
        total_completed_consultations: number;
    };
    calendarData: any[];
    selectedMonth: string | null;
    selectedYear: string | null;
    loading: boolean;
    error: string | null;
    creationSuccess: boolean;
}

const initialState: AppointmentState = {
    appointmentCount: {
        total_consultations_for_month: 0,
        in_person_consultations: 0,
        video_consultations: 0,
        total_completed_consultations: 0,
    },
    calendarData: [],
    selectedMonth: null,
    selectedYear: null,
    loading: false,
    error: null,
    creationSuccess: false,
};

const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        setSelectedMonth(state, action: PayloadAction<string | null>) {
            state.selectedMonth = action.payload;
        },
        setSelectedYear(state, action: PayloadAction<string | null>) {
            state.selectedYear = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAppointmentData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAppointmentData.fulfilled, (state, action: PayloadAction<{ data: { appointment_count: any; calendar_data: any[] } }>) => {
                state.loading = false;
                state.appointmentCount = action.payload.data.appointment_count;
                state.calendarData = action.payload.data.calendar_data;
                state.error = null;
            })
            .addCase(fetchAppointmentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            })
            .addCase(createAppointment.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.creationSuccess = false;
            })
            .addCase(createAppointment.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.creationSuccess = true;
            })
            .addCase(createAppointment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to create appointment";
                state.creationSuccess = false;
            });
    },
});

export const { setSelectedMonth, setSelectedYear } = appointmentSlice.actions;
export default appointmentSlice.reducer;
