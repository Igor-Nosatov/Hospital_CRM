import React from "react";
import styles from "../../style/index.module.css";
import patientAvatar1 from "../../../../assets/img/patientAvatar1.png";
import patientAvatar2 from "../../../../assets/img/patientAvatar2.png";
import patientAvatar3 from "../../../../assets/img/patientAvatar3.png";
import patientAvatar4 from "../../../../assets/img/patientAvatar4.png";
import patientAvatar5 from "../../../../assets/img/patientAvatar5.png";
import patientAvatar6 from "../../../../assets/img/patientAvatar6.png";
import { AppointmentScoreCardProps } from "../../store";

const AppointmentScoreCard: React.FC<AppointmentScoreCardProps> = ({ countsAppointmentByType }) => {
    if (!countsAppointmentByType) {
        return <div className={`${styles.appointment_score_card}`}>No data available</div>;
    }

    const totalAppointments = countsAppointmentByType.total_appointments;
    const totalOnlineAppointments = countsAppointmentByType.total_online_appointments;
    const totalOfflineAppointments = countsAppointmentByType.total_offline_appointments;

    return (
        <div className={`${styles.appointment_score_card}`}>
            <div className="row g-0">
                <div className="col-12 pb-5">
                    <div className="d-flex flex-row justify-content-between ps-2 pe-2 pb-4">
                        <div className={`${styles.patient_avatar} d-flex flex-row`}>
                            <img src={patientAvatar1} alt="" className={`${styles.patient_avatar_img}`} />
                            <img src={patientAvatar2} alt="" className={`${styles.patient_avatar_img}`} />
                            <img src={patientAvatar3} alt="" className={`${styles.patient_avatar_img}`} />
                            <img src={patientAvatar4} alt="" className={`${styles.patient_avatar_img}`} />
                            <img src={patientAvatar5} alt="" className={`${styles.patient_avatar_img}`} />
                            <img src={patientAvatar6} alt="" className={`${styles.patient_avatar_img}`} />
                        </div>
                    </div>
                </div>
                <div className="row g-0 pt-5 pb-2">
                    <div className="col-4 ps-3 mt-5">
                        <div className={`${styles.count_total_patient}`}>
                            <i className={`${styles.lni_network} lni lni-network ms-2 mt-2`}></i>
                            <div className={`${styles.score_block} d-flex flex-row`}>
                                <div className={`${styles.score_numbers}`}>{totalAppointments}</div>
                                <div>
                                    <p className={`${styles.score_number_sub_title1}`}>
                                        Total
                                        <br />
                                        Patients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ps-3 mt-5">
                        <div className={`${styles.count_total_offline_consult}`}>
                            <i className={`${styles.lni_user} lni lni-user ms-2 mt-2`}></i>
                            <div className={`${styles.score_block} d-flex flex-row`}>
                                <div className={`${styles.score_numbers}`}>{totalOnlineAppointments}</div>
                                <div>
                                    <p className={`${styles.score_number_sub_title1} pt-3`}>
                                       Offline
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ps-3 pe-3 mt-5">
                        <div className={`${styles.count_total_patient_online_consult}`}>
                            <i className={`${styles.lni_google_meet} lni lni-google-meet pl-1 ms-2 mt-2`}></i>
                            <div className={`${styles.score_block} d-flex flex-row`}>
                                <div className={`${styles.score_numbers}`}>{totalOfflineAppointments}</div>
                                <div>
                                    <p className={`${styles.score_number_sub_title1} pt-3`}>
                                        Online
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentScoreCard;
