import { createAsyncThunk } from "@reduxjs/toolkit";
import telemedicineService from "../services/index.ts";

export const fetchTelemedicinePaginationData = createAsyncThunk(
    "telemedicine/meeting-list",
    async () => {
        const res = await telemedicineService.getAll();
        return res.data;
    }
);

