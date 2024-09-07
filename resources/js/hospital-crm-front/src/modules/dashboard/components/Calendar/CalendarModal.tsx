import React, { useState } from "react";
import "./CalendarModal.css"; 
import { CalendarModalProps } from "../../store";

const CalendarModal: React.FC<CalendarModalProps> = ({ isModalOpen, closeModal, selectedDateData }) => {
    const [activeTab, setActiveTab] = useState("appointment");

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={`modal fade ${isModalOpen ? "show" : ""}`} tabIndex={-1} style={{ display: isModalOpen ? "block" : "none" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal Window</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "appointment" ? "active" : ""}`}
                                    onClick={() => handleTabChange("appointment")}
                                >
                                    Appointment
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "notification" ? "active" : ""}`}
                                    onClick={() => handleTabChange("notification")}
                                >
                                    Notification
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeTab === "medicalEvent" ? "active" : ""}`}
                                    onClick={() => handleTabChange("medicalEvent")}
                                >
                                    Medical Event
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeTab === "appointment" ? "show active" : ""}`}>
                                <h5>Appointment Details:</h5>
                                <ul>
                                    {selectedDateData &&
                                        selectedDateData.appointment_list.map((appointment: any) => (
                                            <li key={appointment.id}>
                                                <p>Reason: {appointment.reason}</p>
                                                <p>Status: {appointment.status}</p>
                                                <p>Type: {appointment.type}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className={`tab-pane fade ${activeTab === "notification" ? "show active" : ""}`}>
                                <h5>Notification Details:</h5>
                                <ul>
                                    {selectedDateData &&
                                        selectedDateData.notification_list.map((notification: any) => (
                                            <li key={notification.id}>
                                                <p>Title: {notification.title}</p>
                                                <p>Message: {notification.message}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className={`tab-pane fade ${activeTab === "medicalEvent" ? "show active" : ""}`}>
                                <h5>Medical Event Details:</h5>
                                <ul>
                                    {selectedDateData &&
                                        selectedDateData.medical_event_list.map((medicalEvent: any) => (
                                            <li key={medicalEvent.id}>
                                                <p>Name: {medicalEvent.name}</p>
                                                <p>Organizer: {medicalEvent.organizer}</p>
                                                <p>Event Type: {medicalEvent.medical_event_type}</p>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarModal;
