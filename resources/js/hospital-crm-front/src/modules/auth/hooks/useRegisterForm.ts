import { useState } from 'react';
import { AppDispatch } from '../../../store';
import { validateRegisterForm, ValidationErrors } from '../validation/validationRegister';
import { handleFormSubmit } from '../utils/handleRegisterFormSubmit';

interface UseRegisterFormProps {
    dispatch: AppDispatch;
    status: string;
}

export const useRegisterForm = ({ dispatch, status }: UseRegisterFormProps) => {
    const [formErrors, setFormErrors] = useState<ValidationErrors>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { name, email, password } = formData;
        handleFormSubmit(name, email, password, validateRegisterForm, setFormErrors, dispatch);
    };

    return {
        formData,
        formErrors,
        handleInputChange,
        handleRegister,
        status,
    };
};
