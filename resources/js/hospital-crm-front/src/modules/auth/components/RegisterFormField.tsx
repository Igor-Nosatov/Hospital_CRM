import React from 'react';
import { RegisterFormFieldProps } from '../types';

const RegisterFormField: React.FC<RegisterFormFieldProps> = ({ id, label, type, placeholder, error, value, onChange }) => {
    return (
        <div className="form-group mt-1">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                className={`form-control ${error ? 'is-invalid' : ''}`}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default RegisterFormField;
