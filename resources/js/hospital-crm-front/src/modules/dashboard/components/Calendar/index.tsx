import React, { useState } from "react";
import styles from "../../style/index.module.css";
import { createCalendarGrid } from "../../../../utils/CalendarGrid.ts";
import CalendarModal from "./CalendarModal.tsx";
import { daysOfWeek } from "../../const/daysOfWeek.ts";
import { AppDispatch } from "../../../../store/index.ts";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedMonth, getSelectedYear, selectAppointmentData } from "../../../appointments/store/selectors.ts";
import { fetchAppointmentData } from "../../../appointments/store/actions.ts";

const Calendar: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const calendarData = useSelector(selectAppointmentData);
    const selectedMonth = useSelector(getSelectedMonth);
    const selectedYear = useSelector(getSelectedYear);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDateData, setSelectedDateData] = useState<any>(null);

    React.useEffect(() => {

        dispatch(fetchAppointmentData({selectedMonth, selectedYear}));
    }, [dispatch, selectedMonth, selectedYear]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDateClick = (date: string) => {
        const dataForDate = calendarData[date];
        if (dataForDate) {
            setSelectedDateData(dataForDate);
            openModal();
        }
    };

    const calendarGrid = createCalendarGrid(calendarData);

    return (
        <div className={styles.appointment_calendar}>
            <div className="row g-0">
                <div className="col-4">
                    <h3 className="pt-3 ps-3">Schedule</h3>
                </div>
                <div className={`${styles.margin_arrow_icon} col-3 offset-5 pt-2`}>
                    <div className={`${styles.custom_arrow_icon} ms-4`}>&#x279A;</div>
                </div>
            </div>
            <div className="row g-0 pt-2">
                <div className="col-12">
                    <ul className={styles.week_days}>
                        {daysOfWeek.map((day) => (
                            <li key={day} className={styles.day}>
                                <a href={`#${day.toLowerCase()}`}>{day}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-12">
                    <div className={`${styles.week_dates} d-flex flex-column`}>
                        {calendarGrid.map((week, weekIndex) => (
                            <div key={weekIndex} className="d-flex flex-row">
                            {week.map((date, dayIndex) => {
                                const dateIndex= date - 1;
                                const clickedDate = Object.keys(calendarData).sort()[dateIndex];
                                return (
                                    <div
                                        key={dayIndex}
                                        className={`${styles.week_date} ${date === null ? styles.hidden : ""}`}
                                        style={{ backgroundColor: date === null ? "white" : "#dce2fe" }}
                                        onClick={() => {
                                            handleDateClick(clickedDate);
                                        }}
                                    >
                                        {date}
                                    </div>
                                );
                            })}
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            <CalendarModal isModalOpen={isModalOpen} closeModal={closeModal} selectedDateData={selectedDateData} />
        </div>
    );
};

export default Calendar;
