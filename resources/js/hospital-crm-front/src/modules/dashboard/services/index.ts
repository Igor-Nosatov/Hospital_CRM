import axiosInstance from "../../../config/http-common.ts";
import { DashboardDataResponse } from "../store/types.ts";

const getAll = async (): Promise<DashboardDataResponse> => {
    const response = await axiosInstance.get<DashboardDataResponse>("/dashboard");
    return response.data;
};

const fetchAppointmentDetails = async (id: number): Promise<Appointment | null> => {
    try {
        const response = await axiosInstance.get<Appointment>(`/appointments/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching appointment details:", error);
        return null;
    }
};

const updateAppointment = async (appointment: Appointment): Promise<void> => {
    try {
        await axiosInstance.put(`/appointments/${appointment.id}`, appointment);
    } catch (error) {
        console.error("Error updating appointment:", error);
        throw error;
    }
};

const dashboardService = {
    getAll,
    fetchAppointmentDetails,
    updateAppointment
};

export default dashboardService;
