import React, { useState, useEffect } from "react";
import TextareaField from "./TextareaField";
import InputField from "./InputField";
import { AppDispatch } from "../../../../store";
import { useDispatch} from "react-redux";
import { fetchDoctorProfileData, updateDoctorProfileData } from "../../store";
import { useParams } from "react-router-dom";
import { textareaEditDoctorFields } from "../../const/textareaEditDoctorFields";
import { inputEditDoctorFields1, inputEditDoctorFields2 } from "../../const/inputEditDoctorFields";

const EditDoctorPersonalInfo = ({ show, handleClose, personalInformation }) => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (show) {
            setFormData({
                first_name: personalInformation.full_name.split(" ")[0] || "",
                last_name: personalInformation.full_name.split(" ")[1] || "",
                ...personalInformation,
            });
        }
    }, [show, personalInformation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleArrayFieldChange = (e, fieldName) => {
        const { value } = e.target;
        const arrayData = value.split(",").map((item) => item.trim());
        setFormData((prevData) => ({ ...prevData, [fieldName]: arrayData }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(updateDoctorProfileData({ id: personalInformation.id, data: formData }));
            handleClose();
            dispatch(fetchDoctorProfileData(Number(id)));
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div
            className={`modal fade ${show ? "show d-block" : ""}`}
            tabIndex="-1"
            aria-labelledby="editDoctorPersonalInfoLabel"
            aria-hidden={!show}
            style={{
                display: show ? "block" : "none",
                backgroundColor: show ? "rgba(0, 0, 0, 0.5)" : "transparent",
            }}
        >
            <div className="modal-dialog" style={{ maxWidth: "80%" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editDoctorPersonalInfoLabel">
                            Edit Personal Information
                        </h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-0">
                                {inputEditDoctorFields1.map(({ label, name, type }) => (
                                    <InputField
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={type}
                                        value={name === "date_of_birth" ? formData[name]?.split("T")[0] : formData[name] || ""}
                                        onChange={handleChange}
                                    />
                                ))}

                                {inputEditDoctorFields2.map(({ label, name, type, isArrayField }) => (
                                    <InputField
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={type}
                                        value={formData[name] || ""}
                                        onChange={isArrayField ? (e) => handleArrayFieldChange(e, name) : handleChange}
                                    />
                                ))}

                                {textareaEditDoctorFields.map(({ label, fieldName, isArrayField }) => (
                                    <TextareaField
                                        key={fieldName}
                                        label={label}
                                        value={formData[fieldName] || ""}
                                        onChange={(e) =>
                                            isArrayField ? handleArrayFieldChange(e, fieldName) : handleChange(e)
                                        }
                                        fieldName={fieldName}
                                    />
                                ))}

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDoctorPersonalInfo;
