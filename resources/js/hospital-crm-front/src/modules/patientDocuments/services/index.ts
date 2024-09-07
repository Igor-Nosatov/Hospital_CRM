import axiosInstance from "../../../config/http-common.ts";

const getAll = async (page: number, search: string = "") => {
    const response = await axiosInstance.get(`/patient-docs?page=${page}&search=${search}`);
    return response.data;
};

const patientDocumentsService = {
    getAll,
};

export default patientDocumentsService;
