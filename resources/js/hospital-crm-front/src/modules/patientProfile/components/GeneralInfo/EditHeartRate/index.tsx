import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { EditHeartRateProps, fetchHeartRate, fetchPatientProfile, updateHeartRate } from "../../../store";
import { selectHeartRate} from "../../../store/selectors.ts";

const EditHeartRate: React.FC<EditHeartRateProps> = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>(); 
    const heartRate = useSelector(selectHeartRate); 
    const [newHeartRate, setNewHeartRate] = useState<number>(0); 

    useEffect(() => {
        if (show) {
            dispatch(fetchHeartRate(patientId));
        }
    }, [show, dispatch, patientId]);

    useEffect(() => {
        if (heartRate !== undefined) {
            setNewHeartRate(heartRate);
        }
    }, [heartRate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value); 
        if (!isNaN(value)) { 
            setNewHeartRate(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(updateHeartRate({ patientId, heartRate: newHeartRate }));
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
                        <h5 className="modal-title">Edit Heart Rate</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form id="heartRateForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="heartRate" className="form-label">Heart Rate (bpm)</label>
                                <input type="number" className="form-control" name="heartRate" value={newHeartRate || ''} onChange={handleChange}  min="30" max="400"/>
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

export default EditHeartRate;
