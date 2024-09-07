import React from "react";

const TextareaField = ({ label, value, onChange, fieldName }) => {
    return (
        <div className="mb-3 col-3 pe-2 ps-2">
            <label htmlFor={fieldName} className="form-label">{label}</label>
            <textarea
                className="form-control"
                id={fieldName}
                name={fieldName}
                rows="3"
                value={value}
                onChange={onChange}
            ></textarea>
        </div>
    );
};

export default TextareaField;
