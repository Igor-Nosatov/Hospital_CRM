import React from "react";
import stylesApt from "../../style/index.module.css";
import { ReminderDetailsModalProps } from "../../store";

const ReminderDetailsModal: React.FC<ReminderDetailsModalProps> = ({ reminder, onClose }) => {
    if (!reminder || reminder.length === 0) return null;
    return (
        <div className="modal" style={{ display: reminder ? 'block' : 'none' }}>
            <div className={`${stylesApt.modal_dialog}`}>
                <div className={`${stylesApt.modal_content}`}>
                    <div className={`${stylesApt.modal_header}`}>
                        <h5 className={`${stylesApt.modal_title}`}>Reminder Details</h5>
                        <button type="button" className={`${stylesApt.btn_close}`} onClick={onClose}>&times;</button>
                    </div>
                    <div className={`${stylesApt.modal_body}`}>
                        {reminder && reminder.map((rem: any, index: number) => (
                            <div key={index}>
                                <p><strong>Title:</strong> {rem.title}</p>
                                <p><strong>Message:</strong> {rem.message}</p>
                                {index !== reminder.length - 1 && <hr className={stylesApt.divider} />}
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

export default ReminderDetailsModal;
