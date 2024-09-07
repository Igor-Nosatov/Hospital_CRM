import React from "react";
import { Link } from "react-router-dom";
import stylesMe from "../../style/index.module.css";
import lector_photo from "../../../../assets/img/bannerPhoto.png";
import { CardEventProps } from "../../store";

const CardEvent: React.FC<CardEventProps> = ({ medicalEvent }) => {
    const {
        title,
        event_id,
        medical_event_type,
        lecturer,
        event_organizer,
        event_date,
        language,
    } = medicalEvent;

    return (
        <div key={event_id}>
            <div className={`${stylesMe.event_card} mb-4 me-4`}>
                <div className="row g-0">
                    <div className={`${stylesMe.event_card_bg} col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 ps-3 pe-3 pt-3 pb-3`}>
                        <div className="d-flex justify-content-center">
                            <div className={`${stylesMe.lector_photo_block}`}>
                                <img src={lector_photo} alt="" className={`${stylesMe.lector_photo}`} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                            <p className={`${stylesMe.event_status} text-center text-dark`}>
                                <i className="lni lni-microphone mt-1 me-1"></i>
                                {medical_event_type}
                            </p>
                        </div>
                        <h6 className={`${stylesMe.event_title} fw-bold text-center text-light`}>
                            Conference Title: {title}
                        </h6>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6 ps-3 pe-3 pt-3 pb-3">
                        <div className={`${stylesMe.conference_desc_block_1} row g-0`}>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className={`${stylesMe.event_subtitle} text-capitalize text-secondary text-start`}>Lecturer</p>
                                <h6 className={`${stylesMe.event_subtitle_1} text-capitalize text-dark text-start`}>{lecturer}</h6>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                <p className={`${stylesMe.event_subtitle} text-capitalize text-secondary text-end`}>Organizer</p>
                                <h6 className={`${stylesMe.event_subtitle_1} text-capitalize text-dark  text-end`}>{event_organizer}</h6>
                            </div>
                        </div>
                        <div className={`${stylesMe.conference_desc_block_2} row g-0`}>
                            <div className="col-6 col-sm-5 col-md-5 col-lg-5 col-xxl-4">
                                <p className={`${stylesMe.event_subtitle} text-capitalize text-secondary  text-start`}>Date</p>
                                <h6 className={`${stylesMe.event_subtitle_1} text-capitalize text-dark  text-start`}>{event_date}</h6>
                            </div>
                            <div className={`${stylesMe.block_detail} col-6 col-sm-7 col-md-7 col-lg-7 col-xxl-8 d-flex justify-content-end`}>
                                <Link to={`/medical-events/${event_id}`} className={`${stylesMe.btn_detail} text-dark text-capitalize text-end`}>
                                   Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardEvent;
