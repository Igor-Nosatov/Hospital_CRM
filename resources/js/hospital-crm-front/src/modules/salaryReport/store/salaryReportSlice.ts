import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchSalaryReportData } from "./actions.ts";
import { SalaryReportData, SalaryReportState } from "./types.ts"

const initialState: SalaryReportState = {
    loading: false,
    error: null,
    salaryListByMonth: [],
    salaryCount: {
        salary_for_next_date:'',
        doctor_full_name:'',
        total_patients: 0,
        total_doctor_wages: 0,
        bonus: 0
    },
};

const salaryReportSlice = createSlice({
    name: "salaryReport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSalaryReportData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSalaryReportData.fulfilled, (state, action:PayloadAction<SalaryReportData>) => {
                state.loading = false;
                state.salaryListByMonth = action.payload.salary_list_by_month ;
                state.salaryCount = action.payload.salary_count ;
            })
            .addCase(fetchSalaryReportData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch data";
            });
    },
});

export default salaryReportSlice.reducer;
