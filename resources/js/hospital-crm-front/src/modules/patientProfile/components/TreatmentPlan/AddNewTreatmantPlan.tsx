import React, { useState } from "react";
import axiosInstance from "../../../../config/http-common";
import { AppDispatch } from "../../../../store";
import { useDispatch } from "react-redux";
import { timingOptions } from "../../const/timingOptions";

const AddNewTreatmentPlan = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState({
        medicament_name: "",
        medication_dosage: "",
        medication_frequency: "",
        medication_timing: "",
        patient_id: Number(patientId)
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            console.log(formData);
            const response = await axiosInstance.post("/treatment-plan", formData);

            handleClose(); // Close the modal after submission
        } catch (error) {
            console.error("Error creating treatment plan:", error);
        }
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} tabIndex={-1} style={{ display: show ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Treatment Plan</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="text"
                            name="medicament_name"
                            value={formData.medicament_name}
                            onChange={handleInputChange}
                            placeholder="Enter medicament name"
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="medication_dosage"
                            value={formData.medication_dosage}
                            onChange={handleInputChange}
                            placeholder="Enter medication dosage"
                            className="form-control mb-2"
                        />
                        <input
                            type="text"
                            name="medication_frequency"
                            value={formData.medication_frequency}
                            onChange={handleInputChange}
                            placeholder="Enter medication frequency"
                            className="form-control mb-2"
                        />
                        <select
                            name="medication_timing"
                            value={formData.medication_timing}
                            onChange={handleInputChange}
                            className="form-control"
                        >
                            {timingOptions.map((option, index) => (
                                <option key={index} value={option.value}>{option.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewTreatmentPlan;
