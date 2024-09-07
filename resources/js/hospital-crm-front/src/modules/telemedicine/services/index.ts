import axiosInstance from "../../../config/http-common.ts";
import { TelemedicineDataResponse } from "../store/types.ts";

const getAll = async (): Promise<TelemedicineDataResponse> => {
    const res = await axiosInstance.get<TelemedicineDataResponse>("/meetings");
    return res.data;
};

const telemedicineService = {
    getAll,
};

export default telemedicineService;
