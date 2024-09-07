import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { addNewPatient, fetchPatientPaginationData } from "../../store";
import { selectCurrentPage, selectSearchQuery } from "../../store/selector";
import InputField from "../InputField";
import { fieldConfigCreatePatient } from "../../const/fieldConfigCreatePatient";

const AddNewPatient: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
    const dispatch = useDispatch<AppDispatch>();

    const currentPage = useSelector(selectCurrentPage);
    const searchQuery = useSelector(selectSearchQuery);

    const doctorId = localStorage.getItem('doctorId');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data: Record<string, any> = {
            doctor_id: Number(doctorId),
        };

        const formDataArray = Array.from(formData.entries());

        for (let [key, value] of formDataArray) {
            data[key] = value;
        }

        try {
            await dispatch(addNewPatient(data)).unwrap();
            dispatch(fetchPatientPaginationData({ page: currentPage, search: searchQuery }));
            handleClose();
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div className="modal fade show" style={{ display: "block" }} role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Patient</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form id="patientForm" onSubmit={handleSubmit}>
                            <div className="row">
                                {fieldConfigCreatePatient.map((field) => (
                                    <InputField
                                        key={field.name}
                                        label={field.label}
                                        name={field.name}
                                        type={field.type}
                                        options={field.options}
                                        required={field.required}
                                        value={field.value}
                                        disabled={field.disabled}
                                    />
                                ))}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewPatient;
