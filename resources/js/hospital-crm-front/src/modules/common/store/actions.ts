import { createAsyncThunk } from "@reduxjs/toolkit";
import commonService from "../services/index.ts";
import { HelpDeskQueryData } from "./types.ts";

export const createHelpDeskQuery = createAsyncThunk(
    "helpDeskQuery/create",
    async (helpDeskQueryData: HelpDeskQueryData) => {
        const response = await commonService.createHelpDeskQuery(helpDeskQueryData);
        return response;
    }
);

export const fetchNotifications = createAsyncThunk(
    "notifications/fetch",
    async (page: number) => {
        const response = await commonService.getNotifications(page);
        return response.data;
    }
);

export const searchPatients = createAsyncThunk(
    "patients/search",
    async (searchTerm: string) => {
        const response = await commonService.searchPatients(searchTerm);
        return response.data;
    }
);
