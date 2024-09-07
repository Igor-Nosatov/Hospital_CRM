import React from "react";
import { formatDate } from "../../utils/dateUtils";
import stylesApt from "../../style/index.module.css";
import { AppointmentDetailsModalProps } from "../../store";

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({ appointment, onClose }) => {
    if (!appointment || appointment.length === 0) return null;

    return (
        <div className="modal" style={{ display: appointment.length > 0 ? 'block' : 'none' }}>
            <div className={`${stylesApt.modal_dialog}`}>
                <div className={`${stylesApt.modal_content}`}>
                    <div className={`${stylesApt.modal_header}`}>
                        <h5 className={`${stylesApt.modal_title}`}>Appointment Details</h5>
                        <button type="button" className={`${stylesApt.btn_close}`} onClick={onClose}>&times;</button>
                    </div>
                    <div className={`${stylesApt.modal_body}`}>
                        {appointment.map((appt, index) => (
                            <div key={index}>
                                <p><strong>ID:</strong> {appt.id}</p>
                                <p><strong>DateTime:</strong> {formatDate(appt.appointment_datetime)}</p>
                                <p><strong>Reason:</strong> {appt.reason}</p>
                                <p className="text-capitalize"><strong>Status:</strong> {appt.status}</p>
                                <p><strong>Type:</strong> {appt.type}</p>
                                {index !== appointment.length - 1 && <hr className={stylesApt.divider} />}
                            </div>
                        ))}
                    </div>
                    <div className={`${stylesApt.modal_footer}`}>
                        <button type="button" className={`${stylesApt.btn} ${stylesApt.btn_secondary}`} onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetailsModal;
