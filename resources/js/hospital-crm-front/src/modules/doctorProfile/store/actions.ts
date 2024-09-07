import { createAsyncThunk } from "@reduxjs/toolkit";
import doctorProfileService from "../services/index.ts";

export const fetchDoctorProfileData = createAsyncThunk(
    "doctor-profile/fetchData",
    async (id: number) => {
        const res = await doctorProfileService.getDoctorProfile(id);
        return res.data;
    }
);

export const fetchDoctorPatientVisitsForMonth = createAsyncThunk(
    'doctor-profile/fetchDataPatientVisitsForMonth',
    async ({ page }: { page: number }) => {
        const res = await doctorProfileService.getDoctorPatientVisitsForMonth(page);
        return res;
    }
);

export const updateDoctorProfileData = createAsyncThunk(
    "doctor-profile/update",
    async ({ id, data }: { id: number; data: any }) => {
        const res = await doctorProfileService.updateDoctorProfile(id, data);
        return res.data;
    }
);

