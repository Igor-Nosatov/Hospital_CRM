import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/index";

interface LoginPayload {
    email: string;
    password: string;
}

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

interface AuthResponse {
    access_token: string;
    user_id: string;
    doctor_id: string;
}

interface AxiosErrorResponse {
    response: {
        data?: any;
        status?: number;
        headers?: any;
    };
}

export const loginToAccount = createAsyncThunk<AuthResponse, LoginPayload>(
    "auth/loginToAccount",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await authService.loginToAccount(email, password);
            const { access_token, user_id, doctor_id } = res;
            localStorage.setItem("medical-crm-token", access_token);
            localStorage.setItem("userId", user_id);
            localStorage.setItem("doctorId", doctor_id);
            return res;
        } catch (err) {
            const error = err as AxiosErrorResponse;
            return rejectWithValue(error.response);
        }
    }
);

export const registerAccount = createAsyncThunk<AuthResponse, RegisterPayload>(
    "auth/registerAccount",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const res = await authService.registerAccount(
                name,
                email,
                password
            );
            const { access_token, user_id, doctor_id } = res;
            localStorage.setItem("medical-crm-token", access_token);
            localStorage.setItem("userId", user_id);
            localStorage.setItem("doctorId", doctor_id);
            return res;
        } catch (err) {
            const error = err as AxiosErrorResponse;
            return rejectWithValue(error.response);
        }
    }
);
