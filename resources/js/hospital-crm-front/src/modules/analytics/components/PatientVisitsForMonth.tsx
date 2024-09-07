import React from "react";
import stylesAl from "../style/index.module.css";
import { PatientVisitsForMonthProps } from "../store";

const PatientVisitsForMonth: React.FC<PatientVisitsForMonthProps> = ({ topPatientVisitsForMonth }) => {
    return (
        <div className={`${stylesAl.analitic_card} min_block_width`}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row">
                        <i className={`${stylesAl.cirlce_icon} lni lni-consulting fs-3`}></i>
                        <h3 className="text-capitalize fs-4 mt-3">Top Patient Visits For Month</h3>
                    </div>
                </div>
            </div>
            <div className="row g-0 ps-3 pe-3 pt-4 pb-4 ">
                <div className="col-4">
                    <p className="text-capitalize">Full Name</p>
                </div>
                <div className="col-2">
                    <p className="text-capitalize ps-2">Count</p>
                </div>
                <div className="col-6">
                    <p className="text-capitalize ps-5">Email</p>
                </div>
            </div>
            {topPatientVisitsForMonth && topPatientVisitsForMonth.map((visit) => (
                <div key={visit.id} className="row g-0 ps-3 pe-3">
                    <div className="col-4 border-top pt-2">
                        <p className="text-capitalize">{visit.patient_full_name}</p>
                    </div>
                    <div className="col-2 border-top pt-2">
                        <p className="text-capitalize ps-3">{visit.patient_visits}</p>
                    </div>
                    <div className="col-6 border-top pt-2">
                        <p className={`${stylesAl.email_title} text-capitalize text-start pe-3 fs-6`}>{visit.patient_email}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PatientVisitsForMonth;
