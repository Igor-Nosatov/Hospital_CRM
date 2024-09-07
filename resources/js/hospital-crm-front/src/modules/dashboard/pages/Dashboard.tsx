import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/index";
import { retrieveDashboardData } from "../store/actions";
import {
    selectAppointmentScore,
    selectFirstAppointmentsToday,
    selectDoctorPersonalScore,
    selectNewMedicalEvents,
    selectLoading,
    selectError,
} from "../store/selectors.ts";

import TitleBar from "../components/Note/TitleBar.tsx";
import AppointmentScoreCard from "../components/Score/AppointmentScore.tsx";
import PatientAppointmentCard from "../components/AppointmentCard/index.tsx";
import Calendar from "../components/Calendar/index.tsx";
import DoctorScoreCard from "../components/Score/DoctorScore.tsx";
import NoteCard from "../components/Note/NoteCard.tsx";
import { selectAuthStatus } from "../../auth/store/selectors.ts";
import styles from "../style/index.module.css";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const appointmentScore = useSelector(selectAppointmentScore);
    const firstAppointmentsToday = useSelector(selectFirstAppointmentsToday);
    const doctorPersonalScore = useSelector(selectDoctorPersonalScore);
    const newMedicalEvents = useSelector(selectNewMedicalEvents);
    const status = useSelector(selectAuthStatus);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(retrieveDashboardData());
    }, [status,dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="row g-0 ps-4">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-4 pe-3 pt-2">
                <h3 className="pt-1 ps-1 pb-3 mb-1">Today Appointments</h3>
                <AppointmentScoreCard
                    countsAppointmentByType={appointmentScore}
                />
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-5 pe-3 pt-2">
                <div className="row g-0">
                    <div className="offset-8 col-4 d-none d-lg-block d-xl-block d-xxl-block">
                        <TitleBar />
                    </div>
                    {firstAppointmentsToday.map(
                        (todayAppointment) => (
                            <PatientAppointmentCard
                                key={todayAppointment.id}
                                todayAppointment={todayAppointment}
                            />
                        )
                    )}
                </div>
            </div>
            <div className="d-none d-lg-block d-xl-block d-xxl-block col-lg-5 col-xl-5 col-xxl-3 pe-3 pt-2">
                <div className={`${styles.wrapper_calendar}`}>
                <Calendar />
                </div>
            </div>
            <div className="d-none d-lg-block d-xl-block d-xxl-block col-lg-7 col-xl-7 col-xxl-4 pt-2 pe-3">
                {doctorPersonalScore && (
                    <DoctorScoreCard
                        doctorPersonalScore={doctorPersonalScore}
                    />
                )}
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-8 pt-2">
                <h3 className="pt-3 ps-1 pb-3 mb-2">New Events</h3>
                <div className={`${styles.wrapper_event_note} row g-0 pb-3`}>
                    {newMedicalEvents.map((newMedicalEvent) => (
                        <div
                            key={newMedicalEvent.id}
                            className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 pe-2"
                        >
                            <NoteCard newMedicalEvent={newMedicalEvent} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


