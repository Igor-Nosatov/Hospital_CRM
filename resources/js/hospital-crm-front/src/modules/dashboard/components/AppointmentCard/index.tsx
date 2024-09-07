import React, { useState } from "react";
import { format } from 'date-fns';
import styles from "../../style/index.module.css";
import patientAvatar1 from "../../../../assets/img/patientAvatar1.png";
import UpdateAppointment from './UpdateAppointment.tsx';
import { ApptCardProps } from "../../store/types.ts";

const PatientAppointmentCard: React.FC<ApptCardProps> = ({ todayAppointment }) => {
    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState<number | null>(null);

    const openModal = (id: number) => {
        setShowModal(true);
        setModalId(id);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="col-12 pb-2 ">
            <div className={`${styles.patient_appointment_card}`}>
                <div className="row g-0 d-flex flex-row justify-content-between">
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ps-3">
                        <img
                            src={patientAvatar1}
                            alt=""
                            className={`${styles.patient_appointment_card_img}`}
                        />
                        <i
                            className={`${styles.card_lni_user} lni lni-user`}
                        ></i>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <h6 className={`${styles.full_name_title}`}>
                            {todayAppointment.patient_full_name}
                        </h6>
                        <p className={`pt-1`}>
                            <span className={`${styles.years_title}`}>
                                {todayAppointment.patient_age} years old
                            </span>
                            <span className={`${styles.visit_count_title}`}>
                                {todayAppointment.visits_count}nd visit
                            </span>
                        </p>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-1 col-xxl-1">
                        <i
                            className={`${styles.lni_pencil_alt} lni lni-pencil-alt `}
                            onClick={() => openModal(todayAppointment.id)}
                        ></i>
                    </div>
                    <div className="d-none d-xl-block d-xxl-block col-sm-4 col-xl-4 col-xxl-4 ps-3 pe-4">
                        <div
                            className={`${styles.patient_appointment_card_block} mt-1 pt-3 mt-3 pb-2 ps-2`}
                        >
                            <span
                                className={`${styles.calendar_appointment_date}`}
                            >
                                {format(new Date(todayAppointment.appointment_datetime), "HH:mm:ss dd-MM-yyyy")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <UpdateAppointment
                showModal={showModal}
                modalId={modalId}
                handleClose={closeModal}
            />
        </div>
    );
}

export default PatientAppointmentCard;
