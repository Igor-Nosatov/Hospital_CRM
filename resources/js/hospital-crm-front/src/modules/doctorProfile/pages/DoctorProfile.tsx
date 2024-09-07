import React, { useEffect, useState } from "react";
import DoctorPersonalInfo from "../components/DoctorPersonalInfo.tsx";
import ConductedSessions from "../components/ConductedSessions.tsx";
import TimeSpentCurrentMonth from "../components/TimeSpentCurrentMonth.tsx";
import CustomersServedCurrentMonth from "../components/CustomersServedCurrentMonth.tsx";
import NotificationsOverviewCurrentMonth from "../components/NotificationsOverviewCurrentMonth.tsx";
import PatientDemographicsCurrentMonth from "../components/PatientDemographicsCurrentMonth.tsx";
import PatientPaymentsCurrentMonth from "../components/PatientPaymentsCurrentMonth.tsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPatientVisitsForMonth, fetchDoctorProfileData } from "../store/actions.ts";
import { useParams } from "react-router-dom";
import {
    selectPersonalInformation,
    selectTimeSpentThisMonth,
    selectError,
    selectPatientsServedThisMonth,
    selectLoading,
    selectNotificationsOverview,
    selectPatientDemographics,
    selectPatientPayments,
    selectVisitsForMonth,
    selectVisitsForMonthMeta
} from '../store/selectors.ts';
import { AppDispatch } from "../../../store/index.ts";

const DoctorProfile = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const [currentPage, setCurrentPage] = useState(1);

    const personalInformation = useSelector(selectPersonalInformation);
    const timeSpentThisMonth = useSelector(selectTimeSpentThisMonth);
    const patientsServedThisMonth = useSelector(selectPatientsServedThisMonth);
    const notificationsOverview = useSelector(selectNotificationsOverview);
    const patientDemographics = useSelector(selectPatientDemographics);
    const patientPayments = useSelector(selectPatientPayments);
    const visitsForMonth = useSelector(selectVisitsForMonth);
    const visitsForMonthMeta = useSelector(selectVisitsForMonthMeta);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchDoctorProfileData(Number(id)));
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(fetchDoctorPatientVisitsForMonth({ page: currentPage }));
    }, [dispatch, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="min_width_for_block col-12 pe-5">
                <div className="row g-0">
                    <div className="col-6">
                        <h3 className="pt-3 ps-3">Doctor's Profile</h3>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 pb-5">
                        <DoctorPersonalInfo personalInformation={personalInformation} />
                        <ConductedSessions
                            visitsForMonth={visitsForMonth}
                            visitsForMonthMeta={visitsForMonthMeta}
                            onPageChange={handlePageChange}
                        />
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 ps-3 pb-5">
                        <TimeSpentCurrentMonth timeSpentThisMonth={timeSpentThisMonth} />
                        <CustomersServedCurrentMonth patientsServedThisMonth={patientsServedThisMonth} />
                        <NotificationsOverviewCurrentMonth notificationsOverview={notificationsOverview} />
                        <PatientDemographicsCurrentMonth patientDemographics={patientDemographics} />
                        <PatientPaymentsCurrentMonth patientPayments={patientPayments} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorProfile;
