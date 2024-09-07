import axiosInstance from "../../../config/http-common.ts";
import { HelpDeskQueryData } from "../store/types.ts";

const createHelpDeskQuery = async (data: HelpDeskQueryData) => {
    try {
        await axiosInstance.post('/helpdesk', data);
    } catch (error) {
        console.error('Error creating helpdesk:', error);
        throw error;
    }
};

export const getNotifications = async (page: number) => {
    try {
        const response = await axiosInstance.get(`/doctor-notifications?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching notifications:', error);
        throw error;
    }
};

export const searchPatients = async (searchTerm: string) => {
    try {
        const response = await axiosInstance.get('/patient/patient-search', {
            params: {
                patient_search: searchTerm
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error;
    }
};

const commonService = {
    createHelpDeskQuery,
    getNotifications,
    searchPatients
};

export default commonService;

