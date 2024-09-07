import { createAsyncThunk } from "@reduxjs/toolkit";
import analyticsService from "../services/index.ts";

export const fetchAnalyticsData = createAsyncThunk(
    'analytics/fetchAnalyticsData',
    async () => {
        const res = await analyticsService.getAll();
        return res.data;
    }
);

