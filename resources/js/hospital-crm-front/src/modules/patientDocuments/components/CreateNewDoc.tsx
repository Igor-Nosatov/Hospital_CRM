import React, { useState } from "react";
import axiosInstance from "../../../config/http-common";
import SearchSelect from "../../appointments/components/CreateNewAppointment/SearchSelect";
import { documentTypeOptions } from "./documentTypeOptions";

interface CreateNewDocProps {
    closeModal: () => void;
}

const CreateNewDoc: React.FC<CreateNewDocProps> = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        title: "",
        document_type: "",
        document_name: "",
        doctor_id: localStorage.getItem('doctorId'),
        patient_id: "",
        file: null as File | null
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setFormData({ ...formData, file });
        }
    };

    const handlePatientSelect = (patient: { id: number }) => {
        setFormData({ ...formData, patient_id: patient.id.toString() });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) {
                if (key === 'file') {
                    formDataToSend.append('file', value);
                } else {
                    formDataToSend.append(key, value as string);
                }
            }
        });

        try {
            const response = await axiosInstance.post('/patient-docs', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Document saved:', response.data);
            closeModal();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error saving document:', error);
            }
        }
    };

    return (
        <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add New Document</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} />
                                {errors.title && <div className="text-danger">{errors.title}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="document_type">Document Type:</label>
                                <select className="form-select" id="document_type" name="document_type" value={formData.document_type} onChange={handleChange}>
                                    <option value="">Select Document Type</option>
                                    {documentTypeOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                {errors.document_type && <div className="text-danger">{errors.document_type}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="document_name" className="form-label">Document Name</label>
                                <input type="text" className="form-control" id="document_name" name="document_name" value={formData.document_name} onChange={handleChange} />
                                {errors.document_name && <div className="text-danger">{errors.document_name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label">File</label>
                                <input type="file" className="form-control" id="file" name="file" onChange={handleFileChange} />
                                {errors.file && <div className="text-danger">{errors.file}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Patient:</label>
                                <SearchSelect onSelect={handlePatientSelect} />
                            </div>
                            <button type="submit" className="btn btn-primary">Save Document</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewDoc;
