import React, { useState } from "react";
import SearchSelect from "./SearchSelect.tsx";
import MedicalServiceSelect from "./MedicalServiceSelect.tsx";
import { useDispatch } from "react-redux";
import { createAppointment } from "../../store/actions.ts";
import { ModalProps, AppointmentData } from "../../store/types.ts";
import { AppDispatch } from "../../../../store/index.ts";
import { initializeFormData, handleInputChange, handleSelectChange } from "../../utils/appointmentHelpers.ts";
import { appointmentTypes } from "../../constants/appointmentTypes.ts";

const CreateNewAppointment: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const dispatch = useDispatch<AppDispatch>();
    const doctorId = Number(localStorage.getItem('doctorId'));

    const [formData, setFormData] = useState<AppointmentData>(initializeFormData(doctorId));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(createAppointment(formData));
            closeModal();
            setFormData(initializeFormData(doctorId));
        } catch (error) {
            console.error('Error creating appointment:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {isOpen && (
                <>
                    <div className="modal fade show d-block" role="dialog">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add New Appointment</h5>
                                    <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label htmlFor="appointment_datetime" className="form-label">Appointment Datetime</label>
                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    id="appointment_datetime"
                                                    name="appointment_datetime"
                                                    value={formData.appointment_datetime}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="reminder_datetime" className="form-label">Reminder Datetime</label>
                                                <input
                                                    type="datetime-local"
                                                    className="form-control"
                                                    id="reminder_datetime"
                                                    name="reminder_datetime"
                                                    value={formData.reminder_datetime}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    required
                                                />
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="reason" className="form-label">Reason</label>
                                                <textarea
                                                    className="form-control"
                                                    id="reason"
                                                    name="reason"
                                                    value={formData.reason}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    maxLength={1024}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <label htmlFor="symptoms" className="form-label">Symptoms</label>
                                                <textarea
                                                    className="form-control"
                                                    id="symptoms"
                                                    name="symptoms"
                                                    value={formData.symptoms}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    maxLength={1024}
                                                    required
                                                ></textarea>
                                            </div>
                                            <div className="col-4 mb-3">
                                                <label htmlFor="type" className="form-label">Appointment Type</label>
                                                <select
                                                    className="form-select"
                                                    id="type"
                                                    name="type"
                                                    value={formData.type}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    required
                                                >
                                                    {appointmentTypes.map(type => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-4 mb-3 pt-4 mt-2">
                                                <SearchSelect onSelect={(patient) => handleSelectChange(setFormData, 'patient_id', patient.id)} />
                                            </div>
                                            <div className="col-4 mb-3">
                                                <MedicalServiceSelect
                                                    medicalServiceId={formData.medical_service_id}
                                                    onSelect={(serviceId) => handleSelectChange(setFormData, 'medical_service_id', serviceId)}
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="notes" className="form-label">Notes</label>
                                                <textarea
                                                    className="form-control"
                                                    id="notes"
                                                    name="notes"
                                                    value={formData.notes}
                                                    onChange={(e) => handleInputChange(e, setFormData)}
                                                    maxLength={1024}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-save">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show" onClick={closeModal}></div>
                </>
            )}
        </>
    );
};

export default CreateNewAppointment;
