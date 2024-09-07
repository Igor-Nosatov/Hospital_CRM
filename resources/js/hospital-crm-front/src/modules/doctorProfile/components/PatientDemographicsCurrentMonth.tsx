import React from "react";
import stylesDp from "../style/index.module.css";
import { PatientDemographicsProps } from "../store/types";

const PatientDemographicsCurrentMonth: React.FC<PatientDemographicsProps> = ({patientDemographics}) => {
    const {
        total_patients,
        adults,
        children
    } = patientDemographics;

    return (
        <div className={`${stylesDp.card_profile} mb-4 mt-4`}>
        <div className="row g-0  pt-1">
            <div className="col-12">
                <h3 className="text-dark text-capitalize">
                    Patient Demographics
                </h3>
            </div>
            <div className="col-12">
                <p className="text-secondary">
                    Demographic breakdown
                </p>
            </div>
            <div className="col-12">
                <div className="row g-0">
                    <div className="col-3 border-end text-center">
                        <i
                            className={`${stylesDp.cirlce_icon} lni lni-user fs-3`}
                        ></i>
                    </div>
                    <div className="col-3 border-end text-center pt-2">
                        <h5>{total_patients}</h5>
                        <p className="text-secondary text-capitalize">
                            Total Patients
                        </p>
                    </div>
                    <div className="col-3 border-end text-center pt-2">
                        <h5>{adults}</h5>
                        <p className="text-secondary text-capitalize">
                            Adults
                        </p>
                    </div>
                    <div className="col-3 text-center pt-2">
                        <h5>{children}</h5>
                        <p className="text-secondary text-capitalize">
                            Children
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default PatientDemographicsCurrentMonth;
