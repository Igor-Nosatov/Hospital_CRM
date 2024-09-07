import { createAsyncThunk } from "@reduxjs/toolkit";
import medicalEventsService from "../services/index.ts";

export const fetchMedicalEventsData = createAsyncThunk(
    "medical-events",
    async ({ page }: { page: number})=> {
        const res = await medicalEventsService.getAll(page);
        return res.data;
    }
);

export const fetchMedicalEventByIdData = createAsyncThunk(
    "medical-agenda",
    async (id: number ) => {
        const res = await medicalEventsService.getMedicalEventById(id);
        return res.data;
    }
);

export const submitFeedback = createAsyncThunk(
    "medicalEventFeedback/submit",
    async (formData) => {
        const response = await medicalEventsService.storeMedicalEventFeedback(formData);
        return response;
    }
);
