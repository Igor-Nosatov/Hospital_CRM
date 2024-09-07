import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { EditWeightProps, fetchPatientProfile, fetchWeight, updateWeight } from "../../../store";
import { selectWeight } from "../../../store/selectors";

const EditWeight: React.FC<EditWeightProps> = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const weight = useSelector(selectWeight);
    const [newWeight, setNewWeight] = useState<number | undefined>(undefined); 

    useEffect(() => {
        if (show) {
            dispatch(fetchWeight(patientId));
        }
    }, [show, dispatch, patientId]);

    useEffect(() => {
        if (weight !== undefined) {
            setNewWeight(weight);
        }
    }, [weight]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value); 
        setNewWeight(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (newWeight !== undefined) {
                await dispatch(updateWeight({ patientId, weight: newWeight }));
                handleClose();
                dispatch(fetchPatientProfile(patientId));
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Weight</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form id="weightForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="weight" className="form-label">Weight (kg)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="weight"
                                    value={newWeight !== undefined ? newWeight : ''}
                                    onChange={handleChange}
                                    min="30"
                                    max="400"
                                />
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

export default EditWeight;
