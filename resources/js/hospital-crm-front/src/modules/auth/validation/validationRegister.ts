
export interface ValidationErrors {
    [key: string]: string;
}

export const validateRegisterForm = (name: string, email: string, password: string): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!name.trim()) {
        errors.name = "Name is required.";
    } else if (name.length > 255) {
        errors.name = "Name must not exceed 255 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
    } else if (email.length > 255) {
        errors.email = "Email must not exceed 255 characters.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long.";
    }

    return errors;
};
