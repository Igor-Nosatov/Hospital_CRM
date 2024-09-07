import { RootState } from "../../../store/index.ts";

export const selectAuthState = (state: RootState) => state.auth;

export const selectAuthStatus = (state: RootState) => selectAuthState(state).status;
export const selectAuthError = (state: RootState) => selectAuthState(state).error;
export const selectAuthUser = (state: RootState) => selectAuthState(state).user;
export const selectAuthToken = (state: RootState) => selectAuthState(state).token;
