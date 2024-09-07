import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
import { EditHeightProps, fetchHeight, fetchPatientProfile, updateHeight } from "../../../store";
import { selectHeight } from "../../../store/selectors";

const EditHeight: React.FC<EditHeightProps> = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const height = useSelector(selectHeight);

    const [newHeight, setNewHeight] = useState<number>(0); 

    useEffect(() => {
        if (show) {
            dispatch(fetchHeight(patientId));
        }
    }, [show, dispatch, patientId]);

    useEffect(() => {
        if (height !== undefined) {
            setNewHeight(height);
        }
    }, [height]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setNewHeight(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(updateHeight({ patientId, height: newHeight }));
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
                        <h5 className="modal-title">Edit Height</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form id="heightForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="height" className="form-label">Height (cm)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="height"
                                    value={newHeight}
                                    onChange={handleChange}
                                    min="40"
                                    max="300"
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                    Close
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditHeight;
