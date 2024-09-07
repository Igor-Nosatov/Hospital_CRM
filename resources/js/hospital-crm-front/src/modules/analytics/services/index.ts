import axiosInstance from "../../../config/http-common.ts";

const getAll = async () => {
    const res = await axiosInstance.get("/medical-analytics");
    return res.data;
};

const analyticsService = {
    getAll,
};

export default analyticsService;
