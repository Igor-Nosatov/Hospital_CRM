import { createSlice } from "@reduxjs/toolkit";
import { fetchDiseaseHistory } from "./actions";
import { DiseaseHistoryData } from "./types";

interface DiseaseHistoryState {
    data: DiseaseHistoryData | null;
    loading: boolean;
    error: string | null;
}

const initialState: DiseaseHistoryState = {
    data: null,
    loading: false,
    error: null,
};

const diseaseHistorySlice = createSlice({
    name: "diseaseHistory",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDiseaseHistory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDiseaseHistory.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDiseaseHistory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch disease history";
            });
    },
});

export default diseaseHistorySlice.reducer;
