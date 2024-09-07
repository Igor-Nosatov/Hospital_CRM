import React from 'react';

interface LoginFormFieldProps {
    id: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    label: string;
    ariaDescribedBy?: string;
}

const LoginFormField: React.FC<LoginFormFieldProps> = ({
    id,
    type,
    placeholder,
    value,
    onChange,
    error,
    label,
    ariaDescribedBy
}) => (
    <div className="form-group mt-1">
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-describedby={ariaDescribedBy}
            required
        />
        {error && <div className="text-danger">{error}</div>}
    </div>
);

export default LoginFormField;
