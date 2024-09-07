import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch} from "../../../store/index.ts";
import { fetchAppointmentData } from "../store/actions.ts";
import {
    selectAppointmentCount,
    selectLoading,
    selectError,
    selectAppointmentData,
    getSelectedMonth,
   getSelectedYear,
} from "../store/selectors.ts";

import SortBar from "./../components/SortBar";
import AppointmentScore from "../components/AppointmentScore";
import AppointmentCalendar from "../components/Calendar";

const Appointment: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const calendarData = useSelector(selectAppointmentData);
    const appointmentCount = useSelector(selectAppointmentCount);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const selectedMonth = useSelector(getSelectedMonth);
    const selectedYear = useSelector(getSelectedYear);

    React.useEffect(() => {
        dispatch(fetchAppointmentData({selectedMonth, selectedYear}));
    }, [dispatch, selectedMonth, selectedYear]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="min_width_for_block col-12 appointment_filters">
                <SortBar />
            </div>
            <div className="min_width_for_block col-12 pt-5">
                <AppointmentScore  appointmentCount={appointmentCount}/>
            </div>

            <div className="min_width_for_block col-12 pe-5">
                <AppointmentCalendar calendarData={calendarData}/>
            </div>
        </>
    );
};

export default Appointment;


