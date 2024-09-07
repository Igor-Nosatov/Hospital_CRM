import React from "react";
import stylesApt from "../../style/index.module.css";
import { MedicalEventDetailsModalProps } from "../../store";

const MedicalEventDetailsModal: React.FC<MedicalEventDetailsModalProps> = ({ medicalEvent, onClose }) => {
    if (!medicalEvent || medicalEvent.length === 0) return null;
    return (
        <div className="modal" style={{ display: medicalEvent ? 'block' : 'none' }}>
            <div className={`${stylesApt.modal_dialog}`}>
                <div className={`${stylesApt.modal_content}`}>
                    <div className={`${stylesApt.modal_header}`}>
                        <h5 className={`${stylesApt.modal_title}`}>Medical Event Details</h5>
                        <button type="button" className={`${stylesApt.btn_close}`} onClick={onClose}>&times;</button>
                    </div>
                    <div className={`${stylesApt.modal_body}`}>
                        {medicalEvent && medicalEvent.map((event: any, index: number) => (
                            <div key={index} className={stylesApt.medical_event_item}>
                                <p><strong>Name:</strong> {event.name}</p>
                                <p><strong>Organizer:</strong> {event.organizer}</p>
                                <p><strong>Medical Event Type:</strong> {event.medical_event_type}</p>
                                {index !== medicalEvent.length - 1 && <hr className={stylesApt.divider} />}
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

export default MedicalEventDetailsModal;
