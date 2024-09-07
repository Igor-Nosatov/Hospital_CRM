import React from "react";
import stylesTl from "../style/index.module.css";
import { TitleBarProps } from "../store/types";

const TitleBar: React.FC<TitleBarProps> = ({ meetingCount }) => {

    return (
        <div className="row g-0 ps-4">
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2">
                <h3 className="pt-3 ps-1 pe-5">Telemedicine</h3>
            </div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                <div className=" d-flex flex-row">
                    <p
                        className={`${stylesTl.total_meeting_count} pt-3 `}
                    >
                        <span>{meetingCount.total_meetings_for_month}</span>
                        <span
                            className={`${stylesTl.total_meeting_title}  ms-1`}
                        >
                            Total
                        </span>
                        <span className="ps-3">
                            {meetingCount.completed_meetings}
                        </span>
                        <span
                            className={`${stylesTl.completed_meeting_title} ms-1`}
                        >
                            Completed
                        </span>
                        <span className="ps-3"> {meetingCount.completed_meetings}</span>
                        <span
                            className={`${stylesTl.completed_meeting_title} ms-1`}
                        >
                            Completed
                        </span>
                        <span className="ps-3"> {meetingCount.cancelled_meetings}</span>
                        <span
                            className={`${stylesTl.cancelled_meeting_title}  ms-1`}
                        >
                            Cancelled
                        </span>
                        <span className="ps-3"> {meetingCount.active_meetings}</span>
                        <span
                            className={`${stylesTl.rescheduled_meeting_title}  ms-1`}
                        >
                            Active
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;
