import React from "react";
import stylesTl from "../style/index.module.css";
import patientPhoto from "../../../assets/img/patientPhoto.png";
import camera from "../../../assets/img/camera.png";
import { MeetingCardProps } from "../store";

const MeetingCard: React.FC<MeetingCardProps> = ({meeting}) => {
    return (
        <div className={`${stylesTl.patient_card}  pb-3`}>
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <img
                        src={patientPhoto}
                        alt=""
                        className={`${stylesTl.patient_card_photo} ms-2 mt-2 `}
                    />
                    <div className="d-flex flex-column">
                        <h5
                            className={`${stylesTl.patient_card_fullname} ms-3  mt-3 `}
                        >
                            {meeting.patient_full_name}
                        </h5>
                        <p
                            className={`${stylesTl.patient_card_job} ms-3`}
                        >
                            Phone Number: <br /> {meeting.phone_number}
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-row pe-3">
                    <div
                        className={`${stylesTl.card_custom_div} fs-2`}
                    >
                        <span className={`${stylesTl.card_icon_arrow}`}>
                            &#x279A;
                        </span>
                    </div>
                    <div className={`${stylesTl.card_custom_div}  fs-2`}>
                        <i
                            className={`${stylesTl.card_notify_icon} lni lni-alarm fs-2 mt-2 `}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="card_main_content ps-5 pt-3">
                <div className="d-flex flex-row">
                    <img
                        src={camera}
                        alt=""
                        className={`${stylesTl.card_icon_camera}  mt-2`}
                    />
                    <div className="d-flex flex-column">
                        <p
                            className={`${stylesTl.card_title_event} ps-3 fs-4`}
                        >
                            Google Meet Call
                        </p>
                        <p
                            className={`${stylesTl.card_datetime_event}   ps-3 `}
                        >
                            <span className="">{meeting.meeting_date}</span>
                            <span className="">at 2pm</span>
                        </p>
                    </div>
                </div>
            </div>
            <p className={` fw-bold ps-5 `}>Status:  {meeting.meeting_status}</p>
            <div className="card_buttons d-flex flex-row ps-5">

                <button
                    className={`${stylesTl.card_btn_circle} me-1`}
                >
                    <i
                        className={`${stylesTl.lni_envelope} lni lni-envelope fs-3`}
                    ></i>
                </button>
                <button
                    className={`${stylesTl.card_btn_circle} me-1`}
                >
                    <i
                        className={`${stylesTl.lni_video} lni lni-video fs-3`}
                    ></i>
                </button>
            </div>
        </div>
    )
}

export default MeetingCard;
