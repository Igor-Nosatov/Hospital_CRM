import React from 'react';
import { TableRowContentProps } from '../store/types.ts';

const TableRowContent: React.FC<TableRowContentProps>= ({salary}) => {
    return (
        <div className="row g-0 border-bottom pt-3">
            <div className="col-4 col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>{salary.patient_full_name}</p>
            </div>
            <div className="col-4  col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>{salary.payment_date}</p>
            </div>
            <div className="col-4 col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>${salary.amount}</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>$1{salary.payment_method}</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>${salary.company_fee}</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 text-center'>${salary.doctor_wages}</p>
            </div>
        </div>
    );
}
export default TableRowContent;




