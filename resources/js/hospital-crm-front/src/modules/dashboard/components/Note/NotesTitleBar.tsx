import React from "react";
import styles from "../../style/index.module.css";
import { Link } from "react-router-dom";

const NotesTitleBar: React.FC = () => {
    return (
        <div className={`${styles.notes_header} row g-0`}>
            <div className="col-4">
                <h3 className="fs-3">Notes</h3>
            </div>
            <div className="col-3 offset-5">
                <div className="d-flex justify-content-end pe-2">
                    <Link
                     to="/medical-events"
                        className={`${styles.custom_arrow_icon} ${styles.adds_custom_arrow}  mb-5`}
                    >
                        &#x279A;
                    </Link>
                    <div
                        className={`${styles.custom_margin}`}
                    ></div>
                </div>
            </div>
        </div>
    );

}

export default NotesTitleBar;
