import React from "react";
import stylesDp from "../style/index.module.css";
import { PatientPaymentsProps } from "../store/types";

const PatientPaymentsCurrentMonth: React.FC<PatientPaymentsProps> = ({ patientPayments }) => {
    const {
        processed_payment,
        confirmed_payment,
        complete_payment,
    } = patientPayments;

    return (
        <div className={`${stylesDp.card_profile} mb-4`}>
            <div className="row g-0  pt-1">
                <div className="col-12">
                    <h3 className="text-dark text-capitalize">
                        Patient Payments
                    </h3>
                </div>
                <div className="col-12">
                    <p className="text-secondary">
                        Payment statistics
                    </p>
                </div>
                <div className="col-12">
                    <div className="row g-0">
                        <div className="col-3 border-end text-center">

                            <i
                                className={`${stylesDp.cirlce_icon} lni lni-wallet fs-3 mt-3`}
                            ></i>
                        </div>
                        <div className="col-3 border-end text-center pt-3">
                            <h5>${processed_payment}</h5>
                            <p className="text-secondary text-capitalize">
                                Processed Payment
                            </p>
                        </div>
                        <div className="col-3 border-end text-center pt-3">
                            <h5>${confirmed_payment}</h5>
                            <p className="text-secondary text-capitalize">
                                Confirmed Payment
                            </p>
                        </div>
                        <div className="col-3 text-center pt-3">
                            <h5>${complete_payment}</h5>
                            <p className="text-secondary text-capitalize">
                            Complete Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PatientPaymentsCurrentMonth;
