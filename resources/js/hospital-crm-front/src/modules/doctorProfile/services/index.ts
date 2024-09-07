import axiosInstance from "../../../config/http-common.ts";


const getDoctorProfile = async (id: number) => {
    const res = await axiosInstance.get(`/doctor/${id}`);
    return res.data;
};

const getDoctorPatientVisitsForMonth = async (page: number) => {
    try {
        const res = await axiosInstance.get('/doctor/patient-visits', {
            params: {
                page: page,
            },
        });
        return res.data;
    } catch (error) {
        throw new Error('Failed to fetch doctor patient visits');
    }
};

const updateDoctorProfile = async (id: number, data: any) => {
    const response = await axiosInstance.put(`/doctor/${id}`, data);
    return response;
};

const doctorProfileService = {
    getDoctorProfile,
    getDoctorPatientVisitsForMonth,
    updateDoctorProfile
};

export default doctorProfileService;
