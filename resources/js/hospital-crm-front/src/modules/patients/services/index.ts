import axiosInstance from "../../../config/http-common.ts";
import { PatientDataResponse } from "../store/types.ts";
import { PatientRequest } from "../validation/patientRequest.ts";

const getPatientProfile = async (id: number) => {
    const response = await axiosInstance.get(`/patients/${id}`);
    return response.data;
};

const getAll = async (page: number, search: string = ""): Promise<PatientDataResponse> => {
    const response = await axiosInstance.get<PatientDataResponse>(`/patients?page=${page}&search=${search}`);
    return response.data;
};

const addPatient = async (data: PatientRequest) => {
    const response = await axiosInstance.post('/patients', data);
    return response.data;
};

const updatePatient = async (id: number, data: Partial<PatientRequest>) => {
    const response = await axiosInstance.put(`/patients/${id}`, data);
    return response;
};

const getPatientDiseaseHistory = async (id: number) => {
    const response =  await axiosInstance.get(`/patients/${id}`);
    return response.data;
};

const deletePatient = async (id: number) => {
    await axiosInstance.delete(`/patients/${id}`);
};

const patientService = {
    getAll,
    getPatientProfile,
    addPatient,
    updatePatient,
    getPatientDiseaseHistory,
    deletePatient
};

export default patientService;


