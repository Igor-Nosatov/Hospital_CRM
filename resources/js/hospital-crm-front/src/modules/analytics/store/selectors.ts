import { RootState } from "../../../store/index.ts";
import { ExpensesProps } from "../store/types.ts";

export const selectAnalyticsData = (state: RootState) => state.analytics;

export const selectEarningReport = (state: RootState) => selectAnalyticsData(state)?.earningReport;
export const selectTopServices = (state: RootState) => selectAnalyticsData(state)?.topServices;
export const selectExpenses = (state: RootState) => selectAnalyticsData(state)?.expenses;
export const selectServiceStatistic = (state: RootState) => selectAnalyticsData(state)?.serviceStatistic;
export const selectTopPatientVisitsForMonth = (state: RootState) => selectAnalyticsData(state)?.topPatientVisitsForMonth;
export const selectPayments = (state: RootState) => selectAnalyticsData(state)?.payments
export const selectLoading = (state: RootState) => selectAnalyticsData(state)?.loading;
export const selectError = (state: RootState) => selectAnalyticsData(state)?.error;
