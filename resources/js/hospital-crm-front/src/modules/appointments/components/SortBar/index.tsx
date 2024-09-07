import React, { useState, useRef} from "react";
import stylesApt from "../../style/index.module.css";
import arrow from "../../../../assets/img/arrow-left.png";
import CreateNewAppointment from "../CreateNewAppointment/index.tsx";
import { setSelectedMonth, setSelectedYear } from '../../store/actions.ts';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/index.ts';
import { months } from "../../constants/monthName.ts";
import { monthNameToNumber } from "../../helpers/monthNameToNumber.ts";
import { SortBarProps, SortBarState } from "../../store/types.ts";

const SortBar: React.FC<SortBarProps> = () => {
    const [state, setState] = useState<SortBarState>({
        isModalOpen: false,
        isMonthDropdownOpen: false,
        isYearDropdownOpen: false,
        selectedMonth: "Month",
        selectedYear: "Year"
    });

    const monthRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch<AppDispatch>();

    const openModal = () => setState({ ...state, isModalOpen: true });
    const closeModal = () => setState({ ...state, isModalOpen: false });

    const toggleMonthDropdown = () => {
        setState({ ...state, isMonthDropdownOpen: !state.isMonthDropdownOpen, isYearDropdownOpen: false });
    };

    const toggleYearDropdown = () => {
        setState({ ...state, isYearDropdownOpen: !state.isYearDropdownOpen, isMonthDropdownOpen: false });
    };

    const handleMonthSelect = (month: string) => {
        setState({ ...state, selectedMonth: month, isMonthDropdownOpen: false });
        const monthNumber = monthNameToNumber(month);
        dispatch(setSelectedMonth(monthNumber.toString()));
    };

    const handleYearSelect = (year: string) => {
        setState({ ...state, selectedYear: year, isYearDropdownOpen: false });
        dispatch(setSelectedYear(year));
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 9 }, (_, i) => currentYear - 4 + i);

    return (
        <>
            <div className="row g-0">
                <div className="col-6">
                    <h3 className="pt-3 ps-1">Appointments</h3>
                </div>
                <div className="col-6 pt-2">
                    <div className={`${stylesApt.filter_block} d-flex flex-row justify-content-end`}>
                        <p className="pt-3 mt-1 text-secondary">Sort by</p>
                        <div className={stylesApt.dropdown_container} ref={monthRef}>
                            <div
                                className={`${stylesApt.select_period_time}`}
                                onClick={toggleMonthDropdown}
                            >
                                <div className="d-flex justify-content-evenly">
                                    <span className={`${stylesApt.select_month}`}>{state.selectedMonth}</span>
                                    <img src={arrow} alt="" className={`${stylesApt.arrow} ${stylesApt.arrow_down}`} />
                                </div>
                            </div>
                            {state.isMonthDropdownOpen && (
                                <div className={`${stylesApt.dropdown_menu} ${stylesApt.dropdown_menu_open}`}>
                                    {months.map(month => (
                                        <div
                                            key={month}
                                            className={stylesApt.dropdown_item}
                                            onClick={() => handleMonthSelect(month)}
                                        >
                                            {month}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={stylesApt.dropdown_container} ref={yearRef}>
                            <div
                                className={`${stylesApt.select_period_time}`}
                                onClick={toggleYearDropdown}
                            >
                                <div className="d-flex justify-content-evenly">
                                    <span className={`${stylesApt.select_year}`}>{state.selectedYear}</span>
                                    <img src={arrow} alt="" className={`${stylesApt.arrow} ${stylesApt.arrow_down}`} />
                                </div>
                            </div>
                            {state.isYearDropdownOpen && (
                                <div className={`${stylesApt.dropdown_menu} ${stylesApt.dropdown_menu_open}`}>
                                    {years.map(year => (
                                        <div
                                            key={year}
                                            className={stylesApt.dropdown_item}
                                            onClick={() => handleYearSelect(year.toString())}
                                        >
                                            {year}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className={`${stylesApt.apt_btn}`} onClick={openModal}>
                            <span className={`${stylesApt.mark_plus} pe-1 pt-1`}>+</span>
                            Add New Appointment
                        </button>
                    </div>
                </div>
            </div>

            <CreateNewAppointment
                isOpen={state.isModalOpen}
                closeModal={closeModal}
                appointmentType="type"
                appointmentStatus="status"
            />
        </>
    );
};

export default SortBar;
