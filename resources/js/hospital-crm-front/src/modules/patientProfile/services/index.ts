import axiosInstance from "../../../config/http-common.ts";
import { LaboratoryTest } from "../store/types.ts";

const getPatientProfile = async (id: number) => {
    const response = await axiosInstance.get(`/patients/${id}`);
    return response.data;
};

const getBloodPressure = async (patientId: number) => {
    const response = await axiosInstance.get(`/physical-examination/${patientId}`);
    return response.data;
};

const updateBloodPressure = async (patientId: number, bloodPressure: string) => {
    const response = await axiosInstance.post(`/physical-examination`, {
        patient_id: patientId,
        blood_pressure: bloodPressure
    });
    return response.data;
};

const getHeartRate = async (patientId: number) => {
    const response = await axiosInstance.get(`/physical-examination/${patientId}`);
    return response.data;
};

const updateHeartRate = async (patientId: number, heartRate: number) => {
    const response = await axiosInstance.post(`/physical-examination`, {
        patient_id: patientId,
        heart_rate: heartRate
    });
    return response.data;
};

const getHeight = async (patientId: number) => {
    const response = await axiosInstance.get(`/physical-examination/${patientId}`);
    return response.data;
};

const updateHeight = async (patientId: number, height: number) => {
    const response = await axiosInstance.post(`/physical-examination`, {
        patient_id: patientId,
        height: height
    });
    return response.data;
};

const getWeight = async (patientId: number) => {
    const response = await axiosInstance.get(`/physical-examination/${patientId}`);
    return response.data;
};

const updateWeight = async (patientId: number, weight: number) => {
    const response = await axiosInstance.post(`/physical-examination`, {
        patient_id: patientId,
        weight: weight
    });
    return response.data;
};

const getAppointmentList = async (patientId: number, searchTerm: string, currentPage: number) => {
    const response = await axiosInstance.get("/appointment-list", {
        params: {
            patientId,
            search: searchTerm || undefined,
            page: currentPage,
        },
    });
    const { data } = response.data;
    return {
        appointmentList: data.appointmentList,
        totalPagesApptList: data.meta.last_page,
    };
};

export const getAppointmentById = async (appointmentId: number) => {
    const response = await axiosInstance.get(`/appointments/${appointmentId}`);
    console.log(response.data);
    return response.data;
};

const getDiseaseLatestHistory = async (patientId: number) => {
    const response = await axiosInstance.get(`/disease-history/latest/${patientId}`);
    const data = response.data.data;
    const formattedData = {
        ...data,
        date_of_onset: new Date(data.date_of_onset).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }),
    };
    return formattedData;
};

interface DiseaseHistoryData {
    patientHistoryData: any[];
    meta: {
        current_page: number;
        last_page: number;
    };
}

const getDiseaseHistory = async (patientId: number, page: number): Promise<DiseaseHistoryData> => {
    try {
        const response = await axiosInstance.get(`/disease-history/${patientId}?page=${page}`);
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

const getLabTestList = async (patientId: number, page?: number): Promise<{ medicalTestData: LaboratoryTest[], meta: any }> => {
    try {
        const response = await axiosInstance.get(`/lab-test/${patientId}`, { params: { page } });
        return response.data.data;
    } catch (error) {
        throw error;
    }
};

const uploadLabTest = async (formData: FormData): Promise<any> => {
    try {
        const response = await axiosInstance.post('/lab-test', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const createDiseaseHistory = async (formData: any) => {
    const response = await axiosInstance.post("/disease-history", formData);
    return response.data;
};

const getTreatmentPlan = async (patientId: number, page: number) => {
    const response = await axiosInstance.get(`/treatment-plan/${patientId}`, {
        params: {
            page: page
        }
    });
    return response.data;
};

const patientProfileService = {
    getAppointmentList,
    getAppointmentById,
    getPatientProfile,
    getBloodPressure,
    updateBloodPressure,
    getHeartRate,
    updateHeartRate,
    getHeight,
    updateHeight,
    getWeight,
    getDiseaseLatestHistory,
    getDiseaseHistory,
    getLabTestList,
    uploadLabTest,
    createDiseaseHistory,
    getTreatmentPlan
};


export default patientProfileService;
