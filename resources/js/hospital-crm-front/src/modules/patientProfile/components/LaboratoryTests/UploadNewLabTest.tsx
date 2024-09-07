import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadLabTest } from "../../store/actions";

interface UploadNewLabTestProps {
    modalId: string;
    onClose: () => void;
    patientId: number;
    doctorId: number;
}

const UploadNewLabTest: React.FC<UploadNewLabTestProps> = ({ modalId, onClose, patientId }) => {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch();
    const doctorIdentity = localStorage.getItem('doctorId');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!file) {
            setError("Please select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("date_of_medical_analysis", date);
        formData.append("patient_id", patientId.toString());
        formData.append("doctor_id", doctorIdentity);

        try {
            await dispatch(uploadLabTest(formData)).unwrap();
            onClose();
        } catch (error) {
            console.error("Error uploading file", error);
            setError("An error occurred while uploading the file. Please try again.");
        }
    };

    return (
        <div className="modal fade show" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}Label`}>Upload New Laboratory Test</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date of Medical Analysis</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="file" className="form-label">File</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="file"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadNewLabTest;
