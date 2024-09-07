import { createAsyncThunk } from "@reduxjs/toolkit";
import patientProfileService from "../services/index.ts";
import { FetchAppointmentsPayload, FetchAppointmentsResponse } from "./types.ts";

export const fetchPatientProfile = createAsyncThunk(
    'patientProfile/fetchPatientProfile',
    async (id: number) => {
        const response = await patientProfileService.getPatientProfile(id);
        return response;
    }
);

export const fetchAppointments = createAsyncThunk<FetchAppointmentsResponse, FetchAppointmentsPayload>(
    'appointments/fetchAppointments',
    async ({ patientId, searchTerm, currentPage }: { patientId: number, searchTerm: string, currentPage: number }) => {
        const response = await patientProfileService.getAppointmentList(patientId, searchTerm, currentPage);
        return response;
    }
);

export const fetchAppointmentById = createAsyncThunk(
    'appointments/fetchAppointmentById',
    async (appointmentId: number) => {
        const response = await patientProfileService.getAppointmentById(appointmentId);
        return response.data;
    }
);
export const fetchBloodPressure = createAsyncThunk(
    'patientProfile/fetchBloodPressure',
    async (patientId: number) => {
        const response = await patientProfileService.getBloodPressure(patientId);
        return response.data.blood_pressure;
    }
);

export const updateBloodPressure = createAsyncThunk(
    'patientProfile/updateBloodPressure',
    async ({ patientId, bloodPressure }: { patientId: number, bloodPressure: string }) => {
        const response = await patientProfileService.updateBloodPressure(patientId, bloodPressure);
        return response;
    }
);

export const fetchHeartRate = createAsyncThunk(
    'patientProfile/fetchHeartRate',
    async (patientId: number) => {
        const response = await patientProfileService.getHeartRate(patientId);
        return response.data.heart_rate;
    }
);

export const updateHeartRate = createAsyncThunk(
    'patientProfile/updateHeartRate',
    async ({ patientId, heartRate }: { patientId: number, heartRate: number }) => {
        const response = await patientProfileService.updateHeartRate(patientId, heartRate);
        return response;
    }
);

export const fetchHeight = createAsyncThunk(
    'patientProfile/fetchHeight',
    async (patientId: number) => {
        const response = await patientProfileService.getHeight(patientId);
        return response.data.height;
    }
);

export const updateHeight = createAsyncThunk(
    'patientProfile/updateHeight',
    async ({ patientId, height }: { patientId: number, height: number }) => {
        const response = await patientProfileService.updateHeight(patientId, height);
        return response;
    }
);

export const fetchWeight = createAsyncThunk(
    'patientProfile/fetchWeight',
    async (patientId: number) => {
        const response = await patientProfileService.getWeight(patientId);
        return response.data.weight;
    }
);

export const updateWeight = createAsyncThunk(
    'patientProfile/updateWeight',
    async ({ patientId, weight }: { patientId: number, weight: number }) => {
        const response = await patientProfileService.updateWeight(patientId, weight);
        return response;
    }
);

export const fetchLatestDiseaseHistory = createAsyncThunk(
    'diseaseHistory/fetchLatestDiseaseHistory',
    async (patientId: number, { rejectWithValue }) => {
        try {
            const response = await patientProfileService.getDiseaseLatestHistory(patientId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

export const fetchLabTestList = createAsyncThunk(
    'labTest/fetchLabTestList',
    async ({ patientId, page }: { patientId: number, page: number }) => {
        const response = await patientProfileService.getLabTestList(patientId, page);
        return response;
    }
);

export const uploadLabTest = createAsyncThunk(
    'labTest/upload',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await patientProfileService.uploadLabTest(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createDiseaseHistory = createAsyncThunk(
    'diseaseHistory/createDiseaseHistory',
    async (formData: any) => {
        const response = await patientProfileService.createDiseaseHistory(formData);
        return response;
    }
);

export const fetchTreatmentPlan = createAsyncThunk(
    "treatmentPlan/fetchTreatmentPlan",
    async ({ patientId, page }: { patientId: number, page: number }) => {
        const response = await patientProfileService.getTreatmentPlan(patientId, page);
        return response;
    }
);
