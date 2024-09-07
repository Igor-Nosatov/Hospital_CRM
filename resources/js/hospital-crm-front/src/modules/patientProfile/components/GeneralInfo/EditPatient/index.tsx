import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { updatePatient } from "../../../../patients/store";
import { statusOptions } from "../../../../patients/const/statusOptions";
import { maritalStatusOptions } from "../../../../patients/const/maritalStatusOptions";
import { EditPatientProps, fetchPatientProfile } from "../../../store";
import { selectGeneralInfo } from "../../../store/selectors";

const EditPatient: React.FC<EditPatientProps> = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const doctorId = localStorage.getItem('doctorId');
    const generalInfo = useSelector(selectGeneralInfo);

    const [formData, setFormData] = useState({
        first_name: generalInfo.first_name,
        last_name: generalInfo.last_name,
        religion: generalInfo.religion,
        date_of_birth: generalInfo.date_of_birth ? generalInfo.date_of_birth.split("T")[0] : "",
        address: generalInfo.address,
        identity_code: generalInfo.identity_code,
        phone_number: generalInfo.phone_number,
        email: generalInfo.email,
        occupation: generalInfo.occupation,
        legal_representative_first_name: generalInfo.legal_representative_first_name,
        legal_representative_last_name: generalInfo.legal_representative_last_name,
        legal_representative_relationship: generalInfo.legal_representative_relationship,
        legal_representative_phone_number: generalInfo.legal_representative_phone_number,
        marital_status: generalInfo.marital_status,
        status: generalInfo.status,
        doctor_id: doctorId ,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(updatePatient({ id: patientId, data: formData })).unwrap();
            handleClose();
            dispatch(fetchPatientProfile(patientId));
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Patient</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form id="patientForm" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="religion" className="form-label">Religion</label>
                                    <input type="text" className="form-control" name="religion" value={formData.religion} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="identity_code" className="form-label">Identity Code</label>
                                    <input type="text" className="form-control" name="identity_code" value={formData.identity_code} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="occupation" className="form-label">Occupation</label>
                                    <input type="text" className="form-control" name="occupation" value={formData.occupation} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="marital_status" className="form-label">Marital Status</label>
                                    <select className="form-select" name="marital_status" value={formData.marital_status} onChange={handleChange}>
                                        <option value="">Select Marital Status</option>
                                        {maritalStatusOptions.map((status, index) => (
                                            <option key={index} value={status}>{status}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select className="form-select" name="status" value={formData.status} onChange={handleChange}>
                                        <option value="">Select Status</option>
                                        {statusOptions.map((status, index) => (
                                            <option key={index} value={status}>{status}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="legal_representative_first_name" className="form-label">Legal Representative First Name</label>
                                    <input type="text" className="form-control" name="legal_representative_first_name" value={formData.legal_representative_first_name} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="legal_representative_last_name" className="form-label">Legal Representative Last Name</label>
                                    <input type="text" className="form-control" name="legal_representative_last_name" value={formData.legal_representative_last_name} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="legal_representative_relationship" className="form-label">Legal Representative Relationship</label>
                                    <input type="text" className="form-control" name="legal_representative_relationship" value={formData.legal_representative_relationship} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="legal_representative_phone_number" className="form-label">Legal Representative Phone Number</label>
                                    <input type="text" className="form-control" name="legal_representative_phone_number" value={formData.legal_representative_phone_number} onChange={handleChange} />
                                </div>
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

export default EditPatient;
