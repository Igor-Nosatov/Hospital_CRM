import React from 'react';
import stylesSt from '../style/index.module.css';
import { ButtonStates, ProfileSettingsProps } from '../store';

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ profileSettingsList }) => {
    const [buttonStates, setButtonStates] = React.useState<ButtonStates>({
        education: false,
        experience: false,
        licenses: false,
        professionalMemberships: false,
        practiceLocation: false,
        patientReviews: false,
        specialties: false,
        boardCertifications: false,
    });

    const handleToggle = (buttonName: keyof ButtonStates) => {
        setButtonStates(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
    };

    return (
        <div className={`${stylesSt.settings_container}`}>
            <div className="row g-0">
                <div className="col-6 ps-4">
                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Specialties: </h4>
                            <p>Areas of medical specialization or expertise for the doctor, such as cardiology, pediatrics, or dermatology.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.specialties} onChange={() => handleToggle('specialties')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Education: </h4>
                            <p>Details of the doctor's educational background, including medical school attended, degrees obtained, and any specialized training or certifications.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.education} onChange={() => handleToggle('education')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Experience: </h4>
                            <p>Summary of the doctor's professional experience, including previous positions held, years of practice, and areas of clinical focus.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.experience} onChange={() => handleToggle('experience')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Board Certifications: </h4>
                            <p>Information about any board certifications held by the doctor, indicating expertise and adherence to professional standards.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.boardCertifications} onChange={() => handleToggle('boardCertifications')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-6 ps-4">
                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Licenses: </h4>
                            <p>Details of the doctor's medical licenses, including license numbers, expiration dates, and states of licensure.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.licenses} onChange={() => handleToggle('licenses')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Professional Memberships: </h4>
                            <p>Affiliations with professional medical organizations or societies, demonstrating ongoing professional development and networking.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.professionalMemberships} onChange={() => handleToggle('professionalMemberships')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Practice Location: </h4>
                            <p>Address and contact information for the doctor's primary practice location, including office hours and appointment scheduling details.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.practiceLocation} onChange={() => handleToggle('practiceLocation')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>

                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Patient Reviews: </h4>
                            <p>Feedback and reviews from patients about their experiences with the doctor, helping other patients make informed decisions.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.patientReviews} onChange={() => handleToggle('patientReviews')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;
