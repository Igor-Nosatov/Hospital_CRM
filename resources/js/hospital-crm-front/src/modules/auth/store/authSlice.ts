import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginToAccount, registerAccount } from "./actions";

interface AuthState {
    user: string | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginToAccount.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginToAccount.fulfilled, (state, action: PayloadAction<{ access_token: string, user_id: string }>) => {
                state.status = 'succeeded';
                state.user = action.payload.user_id;
                state.token = action.payload.access_token;
            })
            .addCase(loginToAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'An error occurred';
            })
            .addCase(registerAccount.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerAccount.fulfilled, (state, action: PayloadAction<{ access_token: string, user_id: string }>) => {
                state.status = 'succeeded';
                state.user = action.payload.user_id;
                state.token = action.payload.access_token;
            })
            .addCase(registerAccount.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string || 'An error occurred';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
