import React from "react";
import stylesPt from "../style/index.module.css";
import arrow from "../../../assets/img/arrow-left.png";

interface PaginationProps {
    documentMetaData: {
        current_page: number;
        last_page: number;
    };
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ documentMetaData, onPageChange }) => {

    const handlePrevious = () => {
        if (documentMetaData.current_page > 1) {
            onPageChange(documentMetaData.current_page - 1);
        }
    };

    const handleNext = () => {
        if (documentMetaData.current_page < documentMetaData.last_page) {
            onPageChange(documentMetaData.current_page + 1);
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
                {documentMetaData.current_page}
                <span className={`${stylesPt.arrow} text-secondary`}>
                    / {documentMetaData.last_page}
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
