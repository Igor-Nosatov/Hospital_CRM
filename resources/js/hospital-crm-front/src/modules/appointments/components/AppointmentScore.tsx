import React from "react";
import stylesApt from "../style/index.module.css";
import team from "../../../assets/img/team.png";
import person from "../../../assets/img/person.png";
import movie from "../../../assets/img/movie.png";
import check from "../../../assets/img/check.png";
import { ApptProps } from "../store";

const AppointmentScore: React.FC<ApptProps> = ({appointmentCount}) => {

    const totalConsultationsForMonth = appointmentCount.total_consultations_for_month;
    const inPersonConsultations = appointmentCount.in_person_consultations;
    const videoConsultations = appointmentCount.video_consultations;
    const totalCompletedConsultation = appointmentCount.total_completed_consultations;

    return (
        <div className="row g-0">
            <div className="col-7 appointment_score">
                <div className="row g-0">
                    <div className="col-3">
                        <div
                            className={`${stylesApt.score_badge} d-flex flex-row`}
                        >
                            <div>
                                <img
                                    src={team}
                                    alt=""
                                    className={`${stylesApt.score_img} ${stylesApt.score_img_bg1}`}
                                />
                            </div>
                            <p className={`${stylesApt.score_number}`}>
                                {totalConsultationsForMonth}
                                                            </p>
                            <p className={`${stylesApt.score_title}`}>
                                Total <br />
                                consultations
                            </p>
                        </div>
                    </div>
                    <div className="col-3 ps-3">
                        <div
                            className={`${stylesApt.score_badge} d-flex flex-row`}
                        >
                            <div>
                                <img
                                    src={person}
                                    alt=""
                                    className={`${stylesApt.score_img} ${stylesApt.score_img_bg2}`}
                                />
                            </div>
                            <p className={`${stylesApt.score_number}`}>
                                {inPersonConsultations}
                            </p>
                            <p className={`${stylesApt.score_title}`}>
                                In Person <br />
                                consultations
                            </p>
                        </div>
                    </div>
                    <div className="col-3 ps-3">
                        <div
                            className={`${stylesApt.score_badge} d-flex flex-row`}
                        >
                            <div>
                                <img
                                    src={movie}
                                    alt=""
                                    className={`${stylesApt.score_img} ${stylesApt.score_img_bg3}`}
                                />
                            </div>
                            <p className={`${stylesApt.score_number}`}>
                                {videoConsultations}
                            </p>
                            <p className={`${stylesApt.score_title}`}>
                                Video <br />
                                consultations
                            </p>
                        </div>
                    </div>
                    <div className="col-3 ps-3">
                        <div
                            className={`${stylesApt.score_badge} d-flex flex-row`}
                        >
                            <div>
                                <img
                                    src={check}
                                    alt=""
                                    className={`${stylesApt.score_img} ${stylesApt.score_img_bg4}`}
                                />
                            </div>
                            <p className={`${stylesApt.score_number}`}>
                                {totalCompletedConsultation}
                                <span
                                    className={`${stylesApt.sub_score_number} ps-2`}
                                >
                                    / {totalConsultationsForMonth}
                                </span>
                            </p>
                            <p
                                className={`${stylesApt.sub_score_title}`}
                            >
                                Total <br />
                                Completed
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentScore;
