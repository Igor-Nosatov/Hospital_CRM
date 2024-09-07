import { RootState } from "../../../store/index.ts";

export const selectSalaryReportData = (state: RootState) => state.salaryReport;

export const selectSalaryListByMonth = (state: RootState) => selectSalaryReportData(state).salaryListByMonth;
export const selectSalaryCount = (state: RootState) => selectSalaryReportData(state).salaryCount;
export const selectLoading = (state: RootState) => selectSalaryReportData(state).loading;
export const selectError = (state: RootState) => selectSalaryReportData(state).error;
