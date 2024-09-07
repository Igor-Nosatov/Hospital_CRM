import React, { useEffect } from "react";
import { ApptDetailProps, fetchAppointmentById } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { selectAppointmentDataById } from "../../store/selectors";

const AppointmentDetail: React.FC<ApptDetailProps> = ({ appointmentId, handleClose, showModal }) => {
    const dispatch = useDispatch<AppDispatch>();
    const appointmentData = useSelector(selectAppointmentDataById);

    useEffect(() => {
        if(!appointmentData){
            dispatch(fetchAppointmentById(appointmentId));
        }
    }, [dispatch, appointmentData, appointmentId]);

    return (
        <div className={`modal ${showModal ? "show" : ""}`} tabIndex={-1} role="dialog" style={{ display: showModal ? "block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Appointment Details</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {appointmentData ? (
                            <div>
                                <p>Appointment Datetime: {appointmentData.appointment_datetime}</p>
                                <p>Reason: {appointmentData.reason}</p>
                                <p>Symptoms: {appointmentData.symptoms}</p>
                                <p>Notes: {appointmentData.notes}</p>
                                <p className="text-capitalize">Status: {appointmentData.status}</p>
                                <p className="text-capitalize">Type: {appointmentData.type}</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetail;
