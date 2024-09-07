import React from 'react';

const TableRowHeader: React.FC = () => {
    return (
        <div className="row g-0 border-bottom pt-3">
            <div className="col-4  col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end text-center'>Patient Full Name</p>
            </div>
            <div className="col-4  col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end  text-center'>Payment Date</p>
            </div>
            <div className="col-4  col-xs-4 col-md-4 col-lg-2 col-xl-2 col-xxl-2 ">
                <p className='text-dark text-capitalize fs-6 border-end  text-center'>Fee Charged</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 border-end  text-center'>Payment Received</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 border-end text-center '>Insurance Contribution</p>
            </div>
            <div className="col-lg-2 col-xl-2 col-xxl-2 d-none d-lg-block d-xl-block d-xxl-block ">
                <p className='text-dark text-capitalize fs-6 text-center'>Balance Due</p>
            </div>
        </div>
    );
}
export default TableRowHeader;
