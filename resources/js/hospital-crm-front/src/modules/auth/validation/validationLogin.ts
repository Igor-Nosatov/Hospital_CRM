import { ValidationErrors } from "../types";

export const validateLoginForm = (email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    }

    return errors;
};
