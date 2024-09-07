import React from "react";
import stylesPt from "../style/index.module.css";
import arrow from "../../../assets/img/arrow-left.png";
import { PaginationProps } from "../store/types";  // Update this path as needed

const Pagination: React.FC<PaginationProps> = ({ patientMetaData, onPageChange }) => {

    const handlePrevious = () => {
        if (patientMetaData.current_page > 1) {
            onPageChange(patientMetaData.current_page - 1);
        }
    };

    const handleNext = () => {
        if (patientMetaData.current_page < patientMetaData.last_page) {
            onPageChange(patientMetaData.current_page + 1);
        }
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <div className={`${stylesPt.paginate_left}`} onClick={handlePrevious}>
                <img
                    src={arrow}
                    alt=""
                    className={`${stylesPt.arrow} ${stylesPt.arrow_left} mt-2 me-3`}
                />
            </div>
            <div className={`${stylesPt.paginate_page} mt-2`}>
                {patientMetaData.current_page}
                <span className={`${stylesPt.arrow} text-secondary`}>
                    / {patientMetaData.last_page}
                </span>
            </div>
            <div className={`${stylesPt.paginate_right}`} onClick={handleNext}>
                <img
                    src={arrow}
                    alt=""
                    className={`${stylesPt.arrow} ${stylesPt.arrow_right} mt-2 ms-3`}
                />
            </div>
        </div>
    );
}

export default Pagination;
