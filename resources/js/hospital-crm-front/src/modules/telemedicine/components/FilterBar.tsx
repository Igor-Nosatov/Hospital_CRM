import React from "react";
import stylesTl from "../style/index.module.css";
import { FilterBarProps } from "../store/types";

const FilterBar: React.FC<FilterBarProps> = ({
    meetingFilter,
    selectedStatus,
    onStatusSelect,
}) => {
    const handleStatusSelect = (status: string) => {
        onStatusSelect(status === selectedStatus ? null : status);
    };

    return (
        <div className="row g-0 ps-4">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
                <h4 className={`${stylesTl.telemedicine_title} pe-5 ps-2 pb-4`}>
                    Current Month Meetings
                </h4>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <button
                    className={`${stylesTl.btn_circle_filter} ${selectedStatus === null && stylesTl.active
                        }`}
                    onClick={() => handleStatusSelect(null)}
                >
                    All
                </button>
                {meetingFilter.map((filter, index) => (
                    <button
                        key={index}
                        className={`${stylesTl.btn_filter} ${selectedStatus === filter && stylesTl.active
                            }`}
                        onClick={() => handleStatusSelect(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
