import React from "react"
import stylesMe from "../../style/index.module.css";
import arrow from "../../../../assets/img/arrow-left.png";
import { PaginationProps } from "../../store";

const EventPagination: React.FC<PaginationProps> = ({ medicalEventsMetaData, onPageChange }) => {

    const handlePrevious = () => {
        if (medicalEventsMetaData.current_page > 1) {
            onPageChange(medicalEventsMetaData.current_page - 1);
        }
    };

    const handleNext = () => {
        if (medicalEventsMetaData.current_page < medicalEventsMetaData.last_page) {
            onPageChange(medicalEventsMetaData.current_page + 1);
        }
    };

    return (
        <div className="d-flex flex-row justify-content-center">
            <div className={`${stylesMe.paginate_left}`} onClick={handlePrevious}>
                <img
                    src={arrow}
                    alt=""
                    className={`${stylesMe.arrow} ${stylesMe.arrow_left} mt-2 me-3`}
                />
            </div>
            <div className={`${stylesMe.paginate_page} mt-2`}>
                {medicalEventsMetaData.current_page}
                <span className={`${stylesMe.arrow} text-secondary`}>
                    / {medicalEventsMetaData.last_page}
                </span>
            </div>
            <div className={`${stylesMe.paginate_right}`} onClick={handleNext}>
                <img
                    src={arrow}
                    alt=""
                    className={`${stylesMe.arrow} ${stylesMe.arrow_right} mt-2 ms-3`}
                />
            </div>
        </div>
    );
}

export default EventPagination;

