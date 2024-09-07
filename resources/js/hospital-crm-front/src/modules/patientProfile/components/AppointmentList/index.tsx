import React, { useEffect, useState } from "react";
import { AppointmentListProps, ApptDetailProps, fetchAppointmentById, fetchAppointments } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store";
import { selectAppointmentList, selectTotalPages } from "../../store/selectors";
import stylesDp from "../../style/index.module.css";
import medical from "../../../../assets/img/medical.png";
import AppointmentDetail from "./AppointmentDetail";

const AppointmentList: React.FC<AppointmentListProps> = ({ patientId }) => {
    const dispatch = useDispatch();
    const appointmentList = useSelector(selectAppointmentList);
    const totalPages = useSelector(selectTotalPages);

    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<number | null>(null);

    useEffect(() => {
        dispatch(fetchAppointments({ patientId, searchTerm, currentPage }));
    }, [dispatch, patientId, searchTerm, currentPage]);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrentPage(1);
    };

    const handleAppointmentClick = (id: number) => {
        setSelectedAppointmentId(id);
        openModal(id);
    };

    const openModal = (id: number) => {
        setShowModal(true);
        setModalId(id);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className={`${stylesDp.card_small} col-12 mt-4 min_block_width`}>
            <div className={`${stylesDp.card_header} d-flex flex-row justify-content-between align-items-center pb-3`}>
                <p className="text-dark fs-4 fw-bold ps-3 pt-2">Appointments</p>
                <form onSubmit={handleSearchSubmit} className="d-flex">
                    <input
                        type="text"
                        className="form-control me-2 me-4"
                        placeholder="Search by reason"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className="row g-0 border-bottom">
                <div className="col-3">
                    <p className="text-secondary ps-4">Date</p>
                </div>
                <div className="col-4">
                    <p className="text-secondary ps-5">Consultation type</p>
                </div>
                <div className="col-3">
                    <p className="text-secondary ps-3">Reason</p>
                </div>
                <div className="col-2">
                    <p className="text-secondary ps-3">Record</p>
                </div>
            </div>
            <div className={`${stylesDp.app_list_content}`}>
                {appointmentList.length > 0 ? (
                    appointmentList.map((appointment) => (
                        <div key={appointment.id} className="row g-0 border-bottom pt-3">
                            <div className="col-4 pt-3">
                                <small className="text-secondary ps-2 mt-4">{new Date(appointment.appointment_datetime).toLocaleString()}</small>
                            </div>
                            <div className="col-3 d-flex flex-row ps-3 pt-3">
                                <i className={`${stylesDp.lni_user_icon} lni lni-user`}></i>
                                <p className="ps-2">{appointment.type}</p>
                            </div>
                            <div className="col-3">
                                <p className="text-dark" title={appointment.reason.length > 20 ? appointment.reason : ""}>
                                    {appointment.reason.length > 20 ? `${appointment.reason.slice(0, 20)}...` : appointment.reason}
                                </p>
                            </div>
                            <div className="col-2 pt-3">
                                <img src={medical} alt="Medical record" className={`${stylesDp.medical_clipboard}`} onClick={() => handleAppointmentClick(appointment.id)} />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-3">No data available</div>
                )}
            </div>
            {totalPages > 1 && (
                <nav className="mt-4">
                    <ul className={`pagination justify-content-center`}>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={` ${stylesDp.appt_list} page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <AppointmentDetail appointmentId={selectedAppointmentId} handleClose={closeModal} showModal={showModal} />
        </div>
    );
};

export default AppointmentList;
