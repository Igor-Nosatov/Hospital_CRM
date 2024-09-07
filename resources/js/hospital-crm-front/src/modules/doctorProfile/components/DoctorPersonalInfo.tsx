import React from "react";
import stylesDp from "../style/index.module.css";
import doctorPhoto from "../../../assets/img/bannerPhoto.png";
import { PersonalInformationProps } from "../store/types";
import EditDoctorPersonalInfo from "./EditDoctorPersonalInfo";

const DoctorPersonalInfo: React.FC<PersonalInformationProps> = ({ personalInformation }) => {
    const [showEditDoctorPersonalInfo, setEditDoctorPersonalInfo] = React.useState(false);
    const [reloadKey, setReloadKey] = React.useState(0);

    const {
        full_name,
        address,
        email,
        phone_number,
        education,
        experience,
        languages,
        current_location,
        certifications,
        medical_license,
        professional_memberships,
        awards,
        publications,
        research_interests
    } = personalInformation;

    const handleCloseEditDoctorPersonalInfo = () => {
        setEditDoctorPersonalInfo(false);
        setReloadKey(prevKey => prevKey + 1);
    };

    const handleOpenEditDoctorPersonalInfo = () => setEditDoctorPersonalInfo(true);
    return (
        <div className="row g-0">
            <div className="col-12 pb-3 ps-3">
                <div className={stylesDp.card_profile}>
                    <div className="row g-0">
                        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-4 pt-4 pb-4">
                            <div className="d-flex justify-content-center">
                                <div className={`${stylesDp.doctor_photo_block} d-flex justify-content-center`}>
                                    <img src={doctorPhoto} alt="Doctor" className={stylesDp.doctor_photo} />
                                </div>
                            </div>
                            <h5 className="text-capitalize text-center pt-4">{full_name}</h5>
                            <p className="text-dark fs-6 text-start ps-5 pe-5">
                                <i className="lni lni-home fs-5 pe-1 pt-2"></i>{address}
                            </p>
                            <div className="d-flex flex-row justify-content-start  ps-5 pe-5">
                                <p> <i className="lni lni-envelope fs-5 pe-1 mt-1"></i></p>
                                <p className="pt-1">{phone_number}</p>
                            </div>
                            <div className="d-flex flex-row justify-content-start  ps-5 pe-5">
                                <p><i className="lni lni-phone fs-5 pe-1"></i></p>
                                <p className="pt-1">{email}</p>
                            </div>
                        </div>
                        <div className="col-4 col-lg-6 col-xl-4 col-xxl-4 d-none d-lg-block d-xl-block d-xxl-block ps-5 pt-4 ">
                            <h4 className="text-secondary pb-4">Personal Information</h4>
                            <p><strong>Education:</strong> {education}</p>
                            <p><strong>Experience:</strong> {experience} years</p>
                            <p><strong>Languages:</strong> {languages}</p>
                            <p><strong>Location:</strong> {current_location}</p>
                            <p><strong>Certifications:</strong> {certifications}</p>
                            <p><strong>Medical License:</strong> {medical_license}</p>
                            <p><strong>Professional Memberships:</strong> {professional_memberships}</p>
                        </div>
                        <div className="col-4  col-xl-4 col-xxl-4 d-none d-xl-block d-xxl-block ps-5">
                            <p className="d-flex justify-content-end">
                                <i
                                    className={`${stylesDp.cirlce_icon_edit} lni lni-pencil fs-3`}
                                    onClick={handleOpenEditDoctorPersonalInfo}
                                ></i>
                            </p>
                            <div className={`${stylesDp.add_info_doctor_profile}`}>
                                <p className={stylesDp.add_desc_profile}><strong>Awards:</strong> {awards}</p>
                                <p><strong>Publications:</strong> {publications}</p>
                                <p><strong>Research Interests:</strong> {research_interests}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EditDoctorPersonalInfo key={reloadKey} show={showEditDoctorPersonalInfo} personalInformation={personalInformation} handleClose={handleCloseEditDoctorPersonalInfo} />
        </div>
    );
};

export default DoctorPersonalInfo;
