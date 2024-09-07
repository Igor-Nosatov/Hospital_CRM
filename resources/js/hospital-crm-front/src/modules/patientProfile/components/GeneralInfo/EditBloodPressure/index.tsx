import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../store";
import {
    fetchBloodPressure,
    updateBloodPressure,
    fetchPatientProfile,
} from "../../../store/actions";
import { selectBloodPressure } from "../../../store/selectors";
import { EditBloodPressureProps } from "../../../store";

const EditBloodPressure: React.FC<EditBloodPressureProps> = ({
    show,
    handleClose,
    patientId,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const bloodPressure = useSelector(selectBloodPressure);
    const [newBloodPressure, setNewBloodPressure] = useState<string>("");

    useEffect(() => {
        if (show) {
            dispatch(fetchBloodPressure(patientId));
        }
    }, [show, dispatch, patientId]);

    useEffect(() => {
        if (bloodPressure) {
            setNewBloodPressure(bloodPressure);
        }
    }, [bloodPressure]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBloodPressure(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(
                updateBloodPressure({
                    patientId,
                    bloodPressure: newBloodPressure,
                })
            );
            handleClose();
            dispatch(fetchPatientProfile(patientId));
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };

    return (
        <div
            className={`modal ${show ? "d-block" : "d-none"}`}
            tabIndex={-1}
            role="dialog"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Blood Pressure</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={handleClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form id="bloodPressureForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label
                                    htmlFor="bloodPressure"
                                    className="form-label"
                                >
                                    Blood Pressure (mm Hg)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="bloodPressure"
                                    value={newBloodPressure || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClose}
                                >
                                    Close
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
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

export default EditBloodPressure;
