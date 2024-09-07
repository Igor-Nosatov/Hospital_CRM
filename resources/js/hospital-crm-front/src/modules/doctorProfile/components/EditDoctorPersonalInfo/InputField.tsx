import React from 'react';

const InputField = ({ label, name, value, type = "text", onChange }) => (
    <div className="mb-3 col-3 pe-2 ps-2">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <input
            type={type}
            className="form-control"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
);


export default InputField;
