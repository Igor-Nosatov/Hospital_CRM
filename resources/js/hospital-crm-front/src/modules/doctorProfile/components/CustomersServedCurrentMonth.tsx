import React from "react";
import stylesDp from "../style/index.module.css";
import { PatientsServedThisMonthProps } from "../store/types";

const CustomersServedCurrentMonth: React.FC<PatientsServedThisMonthProps> = ({ patientsServedThisMonth }) => {
    const {
        all_patients,
        regular_patients,
        new_patients
    } = patientsServedThisMonth;

    return (
        <div className={`${stylesDp.card_profile} mb-3`}>
            <div className="row g-0">
                <div className="col-12">
                    <h3 className="text-dark text-capitalize">
                        Customers served this month
                    </h3>
                </div>
                <div className="col-12">
                    <p className="text-secondary">
                        Customer service report
                    </p>
                </div>
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-3 border-end text-center">
                            <i
                                className={`${stylesDp.cirlce_icon} lni lni-user  fs-3`}
                            ></i>
                        </div>
                        <div className="col-3 border-end text-center pt-2">
                            <h5>{all_patients}</h5>
                            <p className="text-secondary text-capitalize">
                                All Clients
                            </p>
                        </div>
                        <div className="col-3 border-end text-center pt-2">
                            <h5>{regular_patients}</h5>
                            <p className="text-secondary text-capitalize">
                                Regular
                            </p>
                        </div>
                        <div className="col-3 text-center pt-2">
                            <h5>{new_patients}</h5>
                            <p className="text-secondary text-capitalize">
                                New
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CustomersServedCurrentMonth;
