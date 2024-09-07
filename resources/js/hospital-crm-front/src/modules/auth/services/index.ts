import axiosInstance from "../../../config/http-common.ts";

const loginToAccount = async (email: string, password: string) => {
    try {
        console.log(email,password);
        const response = await axiosInstance.post("/login", {
            email,
            password,
        });
        return response.data.data.content;
    } catch (error) {
        console.error("Error occurred during login:", error);
        throw error;
    }
};

const registerAccount = async (
    name: string,
    email: string,
    password: string
) => {
    try {
        const response = await axiosInstance.post("/register", {
            name,
            email,
            password,
        });
        return response.data.data.content;
    } catch (error) {
        console.error("Error occurred during registration:", error);
        throw error;
    }
};

const authService = {
    loginToAccount,
    registerAccount,
};

export default authService;
