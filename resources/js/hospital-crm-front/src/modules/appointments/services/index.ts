import axiosInstance from "../../../config/http-common.ts";
import { AppointmentData } from "../store/types.ts";

const getAll = async (selectedMonth: string | null, selectedYear: string | null) => {
    let url = "/appointments";

    if (selectedMonth !== null && selectedYear !== null) {
        url += `?selected_month=${selectedMonth}&selected_year=${selectedYear}`;
    } else if (selectedMonth !== null) {
        url += `?selected_month=${selectedMonth}`;
    } else if (selectedYear !== null) {
        url += `?selected_year=${selectedYear}`;
    }

    const response = await axiosInstance.get(url);
    return response.data;
};

const getAllMedicalService = async () => {
    const response = await axiosInstance.get("/medical-service");
    return response.data;
};

const createAppointment = async (data: AppointmentData): Promise<void> => {
    try {
        await axiosInstance.post('/appointments', data);
    } catch (error) {
        console.error('Error creating appointment:', error);
        throw error;
    }
};

const getPatientSearch = async (query: string) => {
    const response = await axiosInstance.get(`/patient/patient-search`, {
        params: { patient_search: query },
    });
    return response.data; 
}

const appointmentService = {
    getAll,
    getAllMedicalService,
    createAppointment,
    getPatientSearch
};

export default appointmentService;
