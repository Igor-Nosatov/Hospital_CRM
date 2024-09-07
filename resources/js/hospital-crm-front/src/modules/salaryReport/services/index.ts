import axiosInstance from "../../../config/http-common.ts";
import { SalaryReportDataResponse } from "../store/types.ts";

const getAll = async (): Promise<SalaryReportDataResponse> => {
    const res = await axiosInstance.get<SalaryReportDataResponse>("/salary-report");
    return res.data;
};

const salaryReportService = {
    getAll,
};

export default salaryReportService;
