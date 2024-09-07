import React from "react";
import stylesDp from "../style/index.module.css";
import { timeSpentThisMonthProps } from "../store/types";

const TimeSpentCurrentMonth: React.FC<timeSpentThisMonthProps> = ({ timeSpentThisMonth }) => {
    const {
        total,
        offline,
        online
    } = timeSpentThisMonth;
    return (
        <div className={`${stylesDp.card_profile}  mb-4 `}>
            <div className="row g-0 pt-1">
                <div className="col-12">
                    <h3 className="text-dark text-capitalize">
                        Time spent this month
                    </h3>
                </div>
                <div className="col-12">
                    <p className="text-secondary">
                        Track how you spend your precious hours
                    </p>
                </div>
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-3 border-end text-center  pt-2">
                            <i
                                className={`${stylesDp.cirlce_icon} lni lni-timer  fs-3`}
                            ></i>
                        </div>
                        <div className="col-3 border-end text-center pt-3">
                            <h5>{total}</h5>
                            <p className="text-secondary text-capitalize">
                                All time
                            </p>
                        </div>
                        <div className="col-3 border-end text-center pt-3">
                            <h5>{offline}</h5>
                            <p className="text-secondary text-capitalize">
                                Offline
                            </p>
                        </div>
                        <div className="col-3 text-center pt-3">
                            <h5>{online}</h5>
                            <p className="text-secondary text-capitalize">
                                Online
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TimeSpentCurrentMonth;
