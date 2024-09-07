import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { updatePatient } from '../../store';
import useDateOfBirth from '../../hooks/EditPatient/useDateOfBirth';
import useEditPatientForm from '../../hooks/EditPatient/useEditPatientForm';
import getModalStyles from '../../utils/getModalStyles';
import EditPatientInputField from './EditPatientInputField';
import { PatientRequest } from '../../validation/patientRequest';

interface EditPatientProps {
    show: boolean;
    handleClose: () => void;
    patient: PatientRequest;
}

const EditPatient: React.FC<EditPatientProps> = ({ show, handleClose, patient }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { formData, handleInputChange } = useEditPatientForm(patient);
    const { formattedDateOfBirth, handleDateChange } = useDateOfBirth(patient.date_of_birth);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await dispatch(updatePatient({ id: patient.id, data: formData }));
            handleClose();
        } catch (error) {
            console.error('Error updating patient:', error);
        }
    };

    const modalStyles = getModalStyles(show);

    return (
        <div className="modal" style={modalStyles} tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Patient</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3 pb-4">
                                {['first_name', 'last_name', 'religion', 'address', 'phone_number', 'email', 'occupation', 'legal_representative_first_name', 'legal_representative_last_name', 'legal_representative_relationship', 'legal_representative_phone_number'].map(id => (
                                    <EditPatientInputField key={id} id={id as keyof PatientRequest} value={formData[id as keyof PatientRequest]} onChange={handleInputChange} />
                                ))}
                                <div className="col-6">
                                    <label htmlFor="date_of_birth" className="form-label">Date of Birth</label>
                                    <input type="date" className="form-control" id="date_of_birth" value={formattedDateOfBirth} onChange={e => handleDateChange(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save Changes</button>
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPatient;
