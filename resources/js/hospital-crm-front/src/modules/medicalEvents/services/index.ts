import axiosInstance from "../../../config/http-common.ts";

const getAll = async (page: number) => {
    const response = await axiosInstance.get(`/medical-events?page=${page}`);
    return response.data;
};

const getMedicalEventById = async (id: number) => {
    const response = await axiosInstance.get(`/medical-events/${id}`);
    return response.data;
};

const storeMedicalEventFeedback = async (formData) => {
    const response = await axiosInstance.post("/medical-event-feedback", formData);
    return response.data;
};

const medicalEventsService = {
    getAll,
    getMedicalEventById,
    storeMedicalEventFeedback
};

export default medicalEventsService;


