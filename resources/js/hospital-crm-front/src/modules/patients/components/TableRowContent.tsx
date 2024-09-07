import React, { useState, useCallback } from "react";
import stylesPt from "../style/index.module.css";
import patientAvatar1 from "../../../assets/img/patientAvatar1.png";
import person from "../../../assets/img/person.png";
import report from "../../../assets/img/report.png";
import remove from "../../../assets/img/remove.png";
import edit from "../../../assets/img/edit.png";
import { TableRowContentProps } from "../store/types";
import DiseaseHistory from "./DiseaseHistory";
import { format } from 'date-fns';
import EditPatient from "./EditPatient";
import { AppDispatch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectSearchQuery } from "../store/selector";
import { fetchPatientPaginationData } from "../store";

const TableRowContent: React.FC<TableRowContentProps> = ({ patient, onDelete }) => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector(selectCurrentPage);
    const searchQuery = useSelector(selectSearchQuery);

    const [showDiseaseHistory, setShowDiseaseHistory] = useState(false);
    const [showEditPatient, setShowEditPatient] = useState(false);

    const age = new Date().getFullYear() - new Date(patient.date_of_birth).getFullYear();

    const handleDelete = useCallback(() => {
        onDelete(patient.id);
    }, [onDelete, patient.id]);

    const handleShowDiseaseHistory = useCallback(() => setShowDiseaseHistory(true), []);
    const handleCloseDiseaseHistory = useCallback(() => setShowDiseaseHistory(false), []);

    const handleShowEditPatient = useCallback(() => setShowEditPatient(true), []);
    const handleCloseEditPatient = useCallback(() => {
        dispatch(fetchPatientPaginationData({ page: currentPage, search: searchQuery }));
        setShowEditPatient(false);
    }, [dispatch, currentPage, searchQuery]);

    return (
        <div className="col-12 patient_table pe-5 ps-3 min_block_width">
            <div className={`${stylesPt.table_main_content} row me-1 min_block_width`}>
                <div className="col-4 col-xs-5  col-sm-5 col-md-4 col-lg-4 col-xl-2 col-xxl-2 ">
                    <div className={`${stylesPt.table_pt_fullname} d-flex flex-row`}>
                        <img
                            src={patientAvatar1}
                            alt="Patient Avatar"
                            className={`${stylesPt.patient_avatar_img}`}
                        />
                        <div className="pt-3 ps-2">
                            <h6 className="text-dark">{`${patient.first_name} ${patient.last_name}`}</h6>
                            <p className="text-secondary">{`${age} years old`}</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-1 col-xxl-1 d-none d-xl-block d-xxl-block">
                    <div className={stylesPt.tooltip}>
                        <p className="text-dark fs-6 pt-3">{patient.marital_status}</p>
                    </div>
                </div>
                <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 ps-4">
                    <p className="text-dark fs-6 pt-3">
                        <img
                            src={person}
                            alt="Person Icon"
                            className={`${stylesPt.score_img} ${stylesPt.score_img_table_bg}`}
                        />
                        {patient.appointments && patient.appointments.length > 0 ? format(new Date(patient.appointments[0].created_at), 'dd-MM-yyyy hh::mm') : "No Appointments"}
                    </p>
                </div>
                <div className="col-xl-1 col-xxl-1 d-none d-xl-block d-xxl-block">
                    <p className="text-dark fs-6 pt-3">
                        {patient.patient_visits && patient.patient_visits.length > 0 ? format(new Date(patient.patient_visits[0].created_at), 'dd-MM-yyyy') : "No Visits"}
                    </p>
                </div>
                <div className="col-4 col-xs-4  col-sm-3 col-md-4 col-lg-4 col-xl-2 col-xxl-2 ">
                    <p className="text-dark fs-6 pt-3">{patient.phone_number}</p>
                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block d-xxl-block">
                    <p className="text-dark fs-6 pt-3">{patient.email}</p>
                </div>
                <div className="col-xl-2 col-xxl-2 d-none d-xl-block d-xxl-block">
                    <div className="d-flex flex-row justify-content-around">
                        <img
                            src={report}
                            alt="Report Icon"
                            className={`${stylesPt.table_img_icon} ms-3`}
                            onClick={handleShowDiseaseHistory}
                        />
                        <img
                            src={edit}
                            alt="Edit Icon"
                            className={`${stylesPt.table_img_icon} ms-3`}
                            onClick={handleShowEditPatient}
                        />
                        <img
                            src={remove}
                            alt="Remove Icon"
                            className={`${stylesPt.table_img_icon} me-3`}
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            </div>
            <DiseaseHistory show={showDiseaseHistory} handleClose={handleCloseDiseaseHistory} patientId={patient.id} />
            <EditPatient show={showEditPatient} handleClose={handleCloseEditPatient} patient={patient}/>
        </div>
    );
};

export default TableRowContent;
