import { createAsyncThunk } from "@reduxjs/toolkit";
import appointmentService from "../services/index.ts";
import { AppointmentData } from "./types.ts";

export const fetchAppointmentData = createAsyncThunk(
    "appointments/fetchData",
    async ({selectedMonth, selectedYear}: {selectedMonth: string | null, selectedYear: string | null}) => {
        const response = await appointmentService.getAll(selectedMonth, selectedYear);
        return response;
    }
);

export const fetchMedicalService = createAsyncThunk(
    "appointment/fetchMedicalService",
    async () => {
        const response = await appointmentService.getAllMedicalService();
        return response;
    }
);

export const createAppointment = createAsyncThunk(
    "appointments/create",
    async (appointmentData: AppointmentData) => {
        const response = await appointmentService.createAppointment(appointmentData);
        return response;
    }
);

export const setSelectedMonth = (selectedMonth: string) => {
    return {
        type: 'appointment/setSelectedMonth',
        payload: {
            selectedMonth
        }
    };
};

export const setSelectedYear = (selectedYear: string) => {
    return {
        type: 'appointment/setSelectedYear',
        payload: {
            selectedYear
        }
    };
};

export const fetchPatientSearch = createAsyncThunk(
    "appointments/PatientSearch",
    async ({ query }: { query: string }) => {
        const response = await appointmentService.getPatientSearch(query);
        return response.data;
    }
);