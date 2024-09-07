import React from "react";
import stylesDp from "../../style/index.module.css";
import patientAvatar1 from "../../../../assets/img/patientAvatar1.png";
import EditPatient from "./EditPatient";
import EditHeight from "./EditHeight";
import EditWeight from "./EditWeight";
import EditBloodPressure from "./EditBloodPressure";
import EditHeartRate from "./EditHeartRate";
import { calculateAge } from "../../utils/calculateAge";
import { ProfileCardProps } from "../../store";

const ProfileCard: React.FC<ProfileCardProps> = ({ generalInfo, patientId}) => {
    const [showEditPatient, setShowEditPatient] = React.useState(false);
    const handleShowEditPatient = () => setShowEditPatient(true);
    const handleCloseEditPatient = () => setShowEditPatient(false);

    const [showEditHeight, setShowEditHeight] = React.useState(false);
    const handleShowEditHeight = () => setShowEditHeight(true);
    const handleCloseEditHeight = () => setShowEditHeight(false);

    const [showEditWeight, setShowEditWeight] = React.useState(false);
    const handleShowEditWeight = () => setShowEditWeight(true);
    const handleCloseEditWeight = () => setShowEditWeight(false);

    const [showEditBloodPressure, setShowEditBloodPressure] = React.useState(false);
    const handleShowEditBloodPressure = () => setShowEditBloodPressure(true);
    const handleCloseEditBloodPressure = () => setShowEditBloodPressure(false);

    const [showEditHeartRate, setShowEditHeartRate] = React.useState(false);
    const handleShowEditHeartRate = () => setShowEditHeartRate(true);
    const handleCloseEditHeartRate = () => setShowEditHeartRate(false);


    const patientAge = calculateAge(generalInfo.date_of_birth);
    return (
        <div className={`${stylesDp.profile_card} row g-0 mt-4 min_block_width`}>
            <div className="col-12">
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        <img
                            src={patientAvatar1}
                            alt=""
                            className={`${stylesDp.profile_img} ms-3 mt-3`}
                        />
                        <p className={`${stylesDp.profile_fullname} ms-3 mt-4 fs-4`}>
                            {generalInfo.full_name}
                        </p>
                    </div>
                    <div className={`${stylesDp.card_custom_div} fs-2`}>
                        <span
                            className={`${stylesDp.card_icon_arrow} me-4`}
                            onClick={handleShowEditPatient}
                        >
                            &#x279A;
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p className="fw-bold ms-3 mt-3 fs-5">General Info</p>
            </div>
            <div className="col-12">
                <div className="row g-0">
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Religion</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{generalInfo.religion}</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Date of birth</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{patientAge} years old</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Job title</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{generalInfo.occupation}</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Marital Status</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}> {generalInfo.marital_status}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p className="fw-bold ms-3 mt-3 fs-5">Contacts</p>
            </div>
            <div className="col-12">
                <div className="row g-0">
                    <div className="col-12 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Patient Address</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{generalInfo.address}</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Phone Number</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{generalInfo.phone_number}</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_general_info}`}>
                            <p className="text-secondary ms-4">Email</p>
                            <p className={`${stylesDp.text_general_info} ms-4`}>{generalInfo.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p className="fw-bold ms-3 mt-3 fs-5">Physical examination</p>
            </div>
            <div className="col-12">
                <div className="row g-0">
                    <div className="col-6  ps-3 pe-3">
                        <div className={`${stylesDp.card_examination}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <i className={`${stylesDp.lni_ruler} lni lni-ruler fs-3 ms-2 mt-2`}></i>
                                </div>
                                <div>
                                    <i className={`${stylesDp.lni_more_alt} lni lni-more-alt fs-3 me-2 mt-2`}
                                     onClick={handleShowEditHeight}
                                    ></i>
                                </div>
                            </div>
                            <p className={`${stylesDp.card_examination_title} text-secondary ms-3 mt-5`}>Height</p>
                            <p className="text-dark fs-4  ms-3">{generalInfo.height} cm</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_examination}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <i className={`${stylesDp.lni_weight} lni lni-weight fs-3 ms-2 mt-2`}></i>
                                </div>
                                <div>
                                    <i className={`${stylesDp.lni_more_alt} lni lni-more-alt fs-3 me-2 mt-2 `}
                                    onClick={handleShowEditWeight}
                                    ></i>
                                </div>
                            </div>
                            <p className={`${stylesDp.card_examination_title} text-secondary ms-3 mt-5`}>Weight</p>
                            <p className="text-dark fs-4 ms-3">{generalInfo.weight} kg</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_examination}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <i className={`${stylesDp.lni_capsule} lni lni-capsule fs-3 ms-2 mt-2`}></i>
                                </div>
                                <div>
                                    <i className={`${stylesDp.lni_more_alt} lni lni-more-alt fs-3 me-2 mt-2`}
                                    onClick={handleShowEditBloodPressure}
                                    ></i>
                                </div>
                            </div>
                            <p className={`${stylesDp.card_examination_title} text-secondary ms-3 mt-5`}>Blood pressure</p>
                            <p className="text-dark fs-4 ms-3">{generalInfo.blood_pressure} mm Hg</p>
                        </div>
                    </div>
                    <div className="col-6 ps-3 pe-3">
                        <div className={`${stylesDp.card_examination}`}>
                            <div className="d-flex flex-row justify-content-between">
                                <div>
                                    <i className={`${stylesDp.lni_heart} lni lni-heart fs-3 ms-2 mt-2`}></i>
                                </div>
                                <div>
                                    <i className={`${stylesDp.lni_more_alt} lni lni-more-alt fs-3 me-2 mt-2`}
                                    onClick={handleShowEditHeartRate}
                                    ></i>
                                </div>
                            </div>
                            <p className={`${stylesDp.card_examination_title} text-secondary ms-3 mt-5`}>Heart rate</p>
                            <p className="text-dark fs-4 ms-3">{generalInfo.heart_rate} bmp</p>
                        </div>
                    </div>
                </div>
            </div>

            <EditPatient show={showEditPatient} handleClose={handleCloseEditPatient} patientId={patientId} />
            <EditHeight show={showEditHeight} handleClose={handleCloseEditHeight} patientId={patientId} />
            <EditWeight show={showEditWeight} handleClose={handleCloseEditWeight} patientId={patientId} />
            <EditBloodPressure show={showEditBloodPressure} handleClose={handleCloseEditBloodPressure} patientId={patientId} />
            <EditHeartRate show={showEditHeartRate} handleClose={handleCloseEditHeartRate} patientId={patientId} />
        </div>
    );
}

export default ProfileCard;
