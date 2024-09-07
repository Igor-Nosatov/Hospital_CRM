import React from "react";
import styles from "../../style/index.module.css";
import { date } from "../../helpers/toLocaleDateString";

const TitleBar: React.FC = () => {
    return (
            <div className="d-flex flex-row justify-content-end">
                <div
                    className={`${styles.calendar_date_block} ps-1 pe-1 mb-2`}
                >
                    <i
                        className={`${styles.lni_calendar_appointment} lni lni-calendar`}
                    ></i>
                    <span
                        className={`${styles.calendar_appointment_date}`}
                    >
                        {date}
                    </span>
                </div>
            </div>
    );
}

export default TitleBar;
