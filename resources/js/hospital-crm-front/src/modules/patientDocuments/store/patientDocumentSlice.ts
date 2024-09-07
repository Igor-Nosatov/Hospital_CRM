import { createSlice} from "@reduxjs/toolkit";
import { fetchPatientDocumentData } from "./actions.ts";

const initialState = {
    documentList:[],
    documentMetaData: [],
    loading: false,
    currentPage: 1,
    searchQuery: "",
    error: null as string | null,
};

const patientDocumentSlice = createSlice({
    name: "patientDocument",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPatientDocumentData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPatientDocumentData.fulfilled, (state, action) => {
                state.loading = false;
                state.documentList = action.payload.patient_docs;
                state.documentMetaData = action.payload.meta;
            })
            .addCase(fetchPatientDocumentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export const { setPage, setSearchQuery } = patientDocumentSlice.actions;

export default patientDocumentSlice.reducer;
