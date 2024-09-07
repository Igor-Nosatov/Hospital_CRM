import { createAsyncThunk } from "@reduxjs/toolkit";
import settingsService from "../services/index.ts";

export const fetchSettingsData = createAsyncThunk(
    "settings",
    async () => {
        const res = await settingsService.getAll();
        return res.data;
    }
);

export const updateSettingStatus = createAsyncThunk(
    "settings/updateSettingStatus",
    async (payload: { id: string; newStatus: string }) => {
        const { id, newStatus } = payload;
        const updatedSetting = await settingsService.updateSettingStatus(id, newStatus);
        return { id, newStatus: updatedSetting.setting_status };
    }
);
