import React, { useState } from "react";
import stylesMe from "../../style/index.module.css";
import { submitFeedback } from "../../store/actions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { formFields } from "../../const/formMedicalEventFeedbackFields";
import { initialMedicalEventFormData } from "../../const/initialMedicalEventFormData";
import { numericMedicalEventFields } from "../../const/numericMedicalEventFields";

interface MedicalEventFeedbackFormProps {
    medicalEventId: string;
}

const MedicalEventFeedbackForm: React.FC<MedicalEventFeedbackFormProps> = ({ medicalEventId }) => {
    const doctorId = Number(localStorage.getItem("doctorId"));
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState(initialMedicalEventFormData(medicalEventId, doctorId));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let parsedValue: boolean | number | string = value;

        if (name === "schedule_convenience") {
            parsedValue = value === "true";
        } else if (numericMedicalEventFields.includes(name)) {
            parsedValue = +value;
        }

        setFormData({
            ...formData,
            [name]: parsedValue,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(submitFeedback(formData));
    };

    return (
        <>
            <h2>Medical Event Feedback</h2>
            <form onSubmit={handleSubmit} className={`${stylesMe.agenda_item} container`}>
                <div className="row g-0">
                    {formFields.map((field, index) => (
                        <div key={index} className="mb-3 col-6 pe-2 ps-2">
                            <label className="form-label" htmlFor={field.name}>
                                {field.label}
                            </label>
                            {field.type === "select" ? (
                                <select
                                    className="form-select"
                                    name={field.name}
                                    id={field.name}
                                    aria-label={field.label}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required={field.required}
                                >
                                    {field.options?.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    className="form-control"
                                    name={field.name}
                                    id={field.name}
                                    aria-label={field.label}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required={field.required}
                                    min={field.min}
                                    max={field.max}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary ms-2">
                    Submit
                </button>
            </form>
        </>
    );
};

export default MedicalEventFeedbackForm;
