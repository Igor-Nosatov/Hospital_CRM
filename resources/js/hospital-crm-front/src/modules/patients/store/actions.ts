import { createAsyncThunk } from "@reduxjs/toolkit";
import patientService from "../services/index.ts";
import { PatientRequest } from "../validation/patientRequest.ts";

export const fetchPatientPaginationData = createAsyncThunk(
    "patient-list",
    async ({ page, search }: { page: number, search: string }) => {
        const res = await patientService.getAll(page, search);
        return res.data;
    }
);

export const addNewPatient = createAsyncThunk(
    "patient/add",
    async (patientData: PatientRequest) => {
        const res = await patientService.addPatient(patientData);
        return res;
    }
);

export const fetchPatientProfile = createAsyncThunk(
    'patient/fetchPatientProfile',
    async (id: number) => {
        const response = await patientService.getPatientProfile(id);
        return response;
    }
);

export const updatePatient = createAsyncThunk(
    "patient/update",
    async ({ id, data }: { id: number; data: Partial<PatientRequest> }) => {
        const res = await patientService.updatePatient(id, data);
        return res.data;
    }
);

export const fetchDiseaseHistory = createAsyncThunk(
    "diseaseHistory/fetchDiseaseHistory",
    async (patientId: number) => {
        const response = await patientService.getPatientDiseaseHistory(patientId);
        return response.data.disease_history;
    }
);

export const deletePatient = createAsyncThunk(
    "delete-patient",
    async (id: number, { rejectWithValue }) => {
        try {
            await patientService.deletePatient(id);
            return id;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);


