// Define the AuthError type
export type AuthError = {
    message: string;
}

// Define the LoginFormElements interface
export interface LoginFormElements extends HTMLFormControlsCollection {
    AuthEmail: HTMLInputElement;
    AuthPassword: HTMLInputElement;
}

// Define the RegisterFormElements interface
export interface RegisterFormElements extends HTMLFormControlsCollection {
    RegisterName: HTMLInputElement;
    RegisterEmail: HTMLInputElement;
    RegisterPassword: HTMLInputElement;
}

// Define the RegisterFormFieldProps type
export type RegisterFormFieldProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string | undefined;
}

// Define the ValidationErrors type
export type ValidationErrors = {
    email?: string;
    password?: string;
}
