import React from "react";
import { InputFieldProps } from "../store";

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", options, required = true, disabled = false, value }) => {
    if (type === "select" && options) {
        return (
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor={name} className="form-label">{label}</label>
                    <select name={name} id={name} className="form-select" required={required}>
                        {options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    } else {
        return (
            <div className="col-6">
                <div className="mb-3">
                    <label htmlFor={name} className="form-label">{label}</label>
                    <input type={type} name={name} id={name} className="form-control" required={required} disabled={disabled} defaultValue={value} />
                </div>
            </div>
        );
    }
};

export default InputField;
