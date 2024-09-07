
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar.tsx";
import ProfileCard from "../components/GeneralInfo/ProfileCard.tsx";
import { AppDispatch } from "../../../store/index.ts";
import { fetchPatientProfile } from "../store/actions.ts";
import {
    selectGeneralInfo,
} from "../store/selectors.ts";
import LabTestSection from "../components/LaboratoryTests/index.tsx";
import AppointmentList from "../components/AppointmentList/index.tsx";
import DiseaseHistory from "../components/DiseaseHistory/index.tsx";
import TreatmentPlan from "../components/TreatmentPlan/index.tsx";

const PatientProfile: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const patientId = Number(id);

    const generalInfo = useSelector(selectGeneralInfo);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageTreatmentPlan, setCurrentPageTreatmentPlan] = useState(1);
    const [labTestSectionKey, setLabTestSectionKey] = useState(0);

    useEffect(() => {
        if (patientId) {
            dispatch(fetchPatientProfile(patientId));
        }
    }, [patientId, dispatch]);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        setLabTestSectionKey(prevKey => prevKey + 1);
    };

    const onPageChangeTreatmentPlan = (page: number) => {
        setCurrentPageTreatmentPlan(page);
    };
    return (
        <>
            <div className="col-12 patient_filters ps-3">
                <TitleBar generalInfo={generalInfo} />
            </div>
            <div className="col-12 ps-3">
                <div className="row g-0 pb-4">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4 ps-2 pe-2">
                        <ProfileCard
                            generalInfo={generalInfo}
                            patientId={patientId}
                        />
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4">
                        <div className="row g-0">
                            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 col-xxl-12 ps-2 pe-2">
                                <LabTestSection
                                    key={labTestSectionKey}
                                    patientId={patientId}
                                    currentPage={currentPage}
                                    onPageChange={onPageChange}
                                />
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12  col-md-6 col-lg-12 col-xl-12 col-xxl-12 ps-2 pe-2">
                                <AppointmentList patientId={patientId} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-4">
                        <div className="row g-0">
                            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-12 ps-2 pe-2">
                                <TreatmentPlan
                                    patientId={patientId}
                                    currentPage={currentPageTreatmentPlan}
                                    onPageChange={onPageChangeTreatmentPlan} />
                            </div>
                            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-12 ps-2 pe-2">
                                <DiseaseHistory patientId={patientId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PatientProfile;


