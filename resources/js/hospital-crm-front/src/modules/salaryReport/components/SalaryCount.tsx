import React from 'react';
import stylesSr from "../style/index.module.css";
import { SalaryCountProps } from '../store/types';

const SalaryCount: React.FC<SalaryCountProps> = ({ salaryCount }) => {
    const {
        total_patients,
        total_doctor_wages,
        bonus
    } = salaryCount;

    return (
        <div className="container-fluid">
            <div className="row justify-content-end">
                <div className="offset-md-6 col-12 col-xs-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 ">
                    <p className='text-dark fs-6 text-capitalize mb-2 mb-md-0'>
                        <i className={`${stylesSr.cirlce_icon} lni lni-users fs-4 me-2`}></i>
                        <span className={`${stylesSr.salary_subtitle}`}>Total Patients: {total_patients}</span>
                    </p>
                </div>
                <div className="col-12 col-xs-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 ">
                    <p className='text-dark fs-6 text-capitalize mb-2 mb-md-0'>
                        <i className={`${stylesSr.cirlce_icon} lni lni-coin fs-4 me-2`}></i>
                        <span className={`${stylesSr.salary_subtitle}`}>Monthly Salary: ${total_doctor_wages}</span>
                    </p>
                </div>
                <div className="col-12 col-xs-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 ">
                    <p className='text-dark fs-6 text-capitalize mb-2 mb-md-0'>
                        <i className={`${stylesSr.cirlce_icon} lni lni-handshake fs-4 me-2`}></i>
                        <span className={`${stylesSr.salary_subtitle}`}>Bonus: ${bonus}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SalaryCount;
