import { useState } from 'react';
import { validateLoginForm } from '../validation/validationLogin';
import { ValidationErrors } from '../types';
import { loginToAccount } from '../store';

export const useLoginForm = (dispatch: Function, navigate: Function) => {
    const [formErrors, setFormErrors] = useState<ValidationErrors>({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const errors = validateLoginForm(email, password);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        dispatch(loginToAccount({ email, password }));
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        formErrors,
        handleLogIn
    };
};
