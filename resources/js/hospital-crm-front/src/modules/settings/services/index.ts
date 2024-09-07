import axiosInstance from "../../../config/http-common.ts";

const getAll = async ()=> {
    const res = await axiosInstance.get("/settings");
    return res.data;
};

const updateSettingStatus = async (id: string, settingStatus: string) => {
    try {
        const response = await axiosInstance.put(`/settings/${id}`, {
            setting_status: settingStatus
        });
        return response.data;
    } catch (error) {
        console.error('Error updating setting_status:', error);
        throw error;
    }
};

const settingsService = {
    getAll,
    updateSettingStatus
};

export default settingsService;
