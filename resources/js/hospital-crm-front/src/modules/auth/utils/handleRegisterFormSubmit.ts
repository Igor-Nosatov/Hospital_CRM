import { AppDispatch } from '../../../store';
import { registerAccount } from '../store';
import { ValidationErrors } from '../validation/validationRegister';
import { Dispatch, SetStateAction } from 'react';

export const handleFormSubmit = (
    name: string,
    email: string,
    password: string,
    validateForm: (name: string, email: string, password: string) => ValidationErrors,
    setFormErrors: Dispatch<SetStateAction<ValidationErrors>>,
    dispatch: AppDispatch
) => {
    const errors = validateForm(name, email, password);
    if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
    }

    setFormErrors({});
    dispatch(registerAccount({ name, email, password }));
};
