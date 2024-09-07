import React, { useEffect, useState } from "react";
import { createDiseaseHistory, CreateNewDiseaseHistoryProps} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { resetSuccess } from "../../store/patientProfileDiseaseHistorySlice";

const CreateNewDiseaseHistory: React.FC<CreateNewDiseaseHistoryProps> = ({ modalId, onClose, patientId }) => {
    const [formData, setFormData] = useState({
        date_of_onset: "",
        diagnosis: "",
        symptoms: "",
        treatment: "",
        previous_interventions: "",
        test_results: "",
        progress: "",
        notes: "",
        patient_id: Number(patientId),
    });

    const dispatch = useDispatch<AppDispatch>();
    const { loading, success, error } = useSelector((state: RootState) => state.diseaseHistory);

    useEffect(() => {
        if (success) {
            onClose();
            dispatch(resetSuccess());
        }
    }, [success, onClose, dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(createDiseaseHistory(formData));
    };
    return (
        <div className="modal fade show" id={modalId} tabIndex={-1} aria-labelledby={`${modalId}Label`} aria-hidden="true" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`${modalId}Label`}>Create New Disease History</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-0">
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="date_of_onset" className="form-label">Date of Onset</label>
                                    <input type="date" className="form-control" id="date_of_onset" value={formData.date_of_onset} onChange={handleChange} required />
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="diagnosis" className="form-label">Diagnosis</label>
                                    <input type="text" className="form-control" id="diagnosis" value={formData.diagnosis} onChange={handleChange} required />
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="symptoms" className="form-label">Symptoms</label>
                                    <textarea className="form-control" id="symptoms" value={formData.symptoms} onChange={handleChange} required></textarea>
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="treatment" className="form-label">Treatment</label>
                                    <textarea className="form-control" id="treatment" value={formData.treatment} onChange={handleChange} required></textarea>
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="previous_interventions" className="form-label">Previous Interventions</label>
                                    <textarea className="form-control" id="previous_interventions" value={formData.previous_interventions} onChange={handleChange} required></textarea>
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="test_results" className="form-label">Test Results</label>
                                    <textarea className="form-control" id="test_results" value={formData.test_results} onChange={handleChange} required></textarea>
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="progress" className="form-label">Progress</label>
                                    <textarea className="form-control" id="progress" value={formData.progress} onChange={handleChange} required></textarea>
                                </div>
                                <div className="mb-3 col-6 pe-2 ps-2">
                                    <label htmlFor="notes" className="form-label">Notes</label>
                                    <textarea className="form-control" id="notes" value={formData.notes} onChange={handleChange} required></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateNewDiseaseHistory;
