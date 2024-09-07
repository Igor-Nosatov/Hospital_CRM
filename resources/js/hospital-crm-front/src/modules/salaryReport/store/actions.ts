import { createAsyncThunk } from "@reduxjs/toolkit";
import salaryReportService from "../services/index.ts";

export const fetchSalaryReportData = createAsyncThunk(
    "salary-report",
    async () => {
        const res = await salaryReportService.getAll();
        return res.data;
    }
);


