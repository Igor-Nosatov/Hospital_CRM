import React from "react";
import dashboardService from "../../services/index.ts";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../store/actions.ts";
import { Appointment, UpdateApptProps } from "../../store/types.ts";

const UpdateAppointment: React.FC<UpdateApptProps> = ({ showModal, modalId, handleClose }) => {
    const dispatch = useDispatch();
    const [appointment, setAppointment] = React.useState<Appointment | null>(null);
    const [editedAppointment, setEditedAppointment] = React.useState<Appointment | null>(null);

    React.useEffect(() => {
        if (showModal && modalId) {
            fetchAppointmentDetails(modalId);
        }
    }, [showModal, modalId]);

    React.useEffect(() => {
        if (appointment) {
            setEditedAppointment({
                ...appointment,
                status: appointment.status || '',
                type: appointment.type || '',
            });
        }
    }, [appointment]);

    const fetchAppointmentDetails = async (id: number) => {
        try {
            const appointmentData = await dashboardService.fetchAppointmentDetails(id);
            setAppointment(appointmentData.data);
        } catch (error) {
            console.error("Error fetching appointment details:", error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        if (editedAppointment) {
            const { name, value } = e.target;
            setEditedAppointment({
                ...editedAppointment,
                [name]: value
            });
        }
    };

    const handleSaveChanges = async () => {
        try {
            if (editedAppointment) {
                const updatedAppointment = await dashboardService.updateAppointment(editedAppointment);
                dispatch(updateAppointment(updatedAppointment));
                handleClose();
            }
        } catch (error) {
            console.error("Error updating appointment:", error);
        }
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} tabIndex={-1} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Appointment ID: {modalId}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {editedAppointment && (
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Appointment Date Time</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="appointment_datetime"
                                        value={editedAppointment.appointment_datetime}
                                        disabled
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Reason</label>
                                    <input type="text" className="form-control" name="reason" value={editedAppointment.reason} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Symptoms</label>
                                    <input type="text" className="form-control" name="symptoms" value={editedAppointment.symptoms} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Notes</label>
                                    <input type="text" className="form-control" name="notes" value={editedAppointment.notes} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Status</label>
                                    <select className="form-select" name="status" value={editedAppointment.status} onChange={handleInputChange}>
                                        <option value="active">Active</option>
                                        <option value="completed">Completed</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Type</label>
                                    <select className="form-select" name="type" value={editedAppointment.type} onChange={handleInputChange}>
                                        <option value="Offline">Offline</option>
                                        <option value="Online">Online</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Reminder Date Time</label>
                                    <input type="text" className="form-control" name="reminder_datetime" value={editedAppointment.reminder_datetime} onChange={handleInputChange}  disabled/>
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAppointment;
