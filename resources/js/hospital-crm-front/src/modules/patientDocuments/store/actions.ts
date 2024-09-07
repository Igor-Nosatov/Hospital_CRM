import { createAsyncThunk } from "@reduxjs/toolkit";
import patientDocumentsService from "../services/index.ts";

export const fetchPatientDocumentData = createAsyncThunk(
    "patient-document",
    async ({ page, search }: { page: number, search: string }) => {
        const res = await patientDocumentsService.getAll(page, search);
        return res.data;
    }
);
