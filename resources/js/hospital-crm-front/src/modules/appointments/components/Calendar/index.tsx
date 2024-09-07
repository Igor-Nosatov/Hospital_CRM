import React from "react";
import stylesApt from "../../style/index.module.css";
import AppointmentDetailsModal from "./AppointmentDetailsModal";
import MedicalEventDetailsModal from "./MedicalEventDetailsModal";
import ReminderDetailsModal from "./ReminderDetailsModal";
import { format, eachDayOfInterval } from 'date-fns';
import { useModal } from "../../hooks/modalHooks";
import { AppointmentCalendarProps } from "../../store";

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({ calendarData }) => {
    const {
        selectedAppointment,
        openAppointmentModal,
        closeAppointmentModal,
        selectedMedicalEvent,
        openMedicalEventModal,
        closeMedicalEventModal,
        selectedReminder,
        openReminderModal,
        closeReminderModal,
    } = useModal();

    const renderCalendarData = () => {
        if (!calendarData || Object.keys(calendarData).length === 0) {
            return null;
        }

        const firstDate = Object.keys(calendarData)[0];
        const [year, month] = firstDate.split("-");
        const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

        return daysInMonth.map(day => {
            const dateStr = format(day, 'yyyy-MM-dd');
            const events = calendarData[dateStr] || { appointment_list: [], medical_event_list: [], notification_list: [] };

            return (
                <div className={`${stylesApt.week_date_slot}`} key={dateStr}>
                    <strong>Date: {dateStr}</strong>
                    <div
                        className={`${stylesApt.week_date} ${events.appointment_list.length ? stylesApt.clickable : stylesApt.non_clickable}`}
                        onClick={() => events.appointment_list.length && openAppointmentModal(events.appointment_list)}
                    >
                        <i className={`${stylesApt.calendar_lni_code_alt} lni lni-code-alt fs-4 mt-2`}></i>
                        {events.appointment_list.length ? `Meetings (${events.appointment_list.length})` : <span style={{ color: 'grey' }}>Meetings</span>}
                    </div>
                    <div
                        className={`${stylesApt.week_date} ${events.medical_event_list.length ? stylesApt.clickable : stylesApt.non_clickable}`}
                        onClick={() => events.medical_event_list.length && openMedicalEventModal(events.medical_event_list)}
                    >
                        <i className={`${stylesApt.calendar_lni_rocket} lni lni-rocket fs-4 mt-2`}></i>
                        {events.medical_event_list.length ? `Events (${events.medical_event_list.length})` : <span style={{ color: 'grey' }}>Events</span>}
                    </div>
                    <div
                        className={`${stylesApt.week_date} ${events.notification_list.length ? stylesApt.clickable : stylesApt.non_clickable}`}
                        onClick={() => events.notification_list.length && openReminderModal(events.notification_list)}
                    >
                        <i className={`${stylesApt.calendar_lni_alarm} lni lni-alarm fs-3 mt-2`}></i>
                        {events.notification_list.length ? `Reminders (${events.notification_list.length})` : <span style={{ color: 'grey' }}>Reminders</span>}
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <div className="row g-0 mb-5">
                <div className={`${stylesApt.calendar_container} col-12`}>
                    <div className={`${stylesApt.weekday_title} d-flex flex-row no-wrap pb-3 pt-3 mb-3`}></div>
                    <div className={`${stylesApt.weekdate_container} d-grid`} style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
                        {renderCalendarData()}
                    </div>
                    <div className={`${stylesApt.weekday_footer} d-flex flex-row no-wrap pb-6 pt-3 mt-3`}></div>
                </div>
            </div>

            <AppointmentDetailsModal appointment={selectedAppointment} onClose={closeAppointmentModal} />
            <MedicalEventDetailsModal medicalEvent={selectedMedicalEvent} onClose={closeMedicalEventModal} />
            <ReminderDetailsModal reminder={selectedReminder} onClose={closeReminderModal} />
        </>
    );
};

export default AppointmentCalendar;
