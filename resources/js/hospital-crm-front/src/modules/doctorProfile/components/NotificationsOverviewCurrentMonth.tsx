import React from "react";
import stylesDp from "../style/index.module.css";
import { NotificationsOverviewProps } from "../store/types";

const NotificationsOverviewCurrentMonth: React.FC<NotificationsOverviewProps> = ({ notificationsOverview }) => {
    const {
        total_notifications,
        unread_notifications,
        read_notifications
    } = notificationsOverview;

    return (
        <div className={`${stylesDp.card_profile} mb-4 mt-4`}>
            <div className="row g-0  pt-1">
                <div className="col-12">
                    <h3 className="text-dark text-capitalize">
                        Notifications Overview
                    </h3>
                </div>
                <div className="col-12">
                    <p className="text-secondary">
                        Monthly notifications report
                    </p>
                </div>
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-3 border-end text-center">
                            <i
                                className={`${stylesDp.cirlce_icon} lni lni-users fs-3`}
                            ></i>
                        </div>
                        <div className="col-3 border-end text-center pt-2">
                            <h5>{total_notifications}</h5>
                            <p className="text-secondary text-capitalize">
                                Total Notifications
                            </p>
                        </div>
                        <div className="col-3 border-end text-center pt-2">
                            <h5>{unread_notifications}</h5>
                            <p className="text-secondary text-capitalize">
                                Unread Notifications
                            </p>
                        </div>
                        <div className="col-3 text-center pt-2">
                            <h5>{read_notifications}</h5>
                            <p className="text-secondary text-capitalize">
                                Read Notifications
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotificationsOverviewCurrentMonth;
