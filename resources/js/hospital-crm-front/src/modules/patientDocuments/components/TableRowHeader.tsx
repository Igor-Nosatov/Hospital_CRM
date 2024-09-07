import React from "react";
import stylesPtDoc from "../style/index.module.css";

const TableRowHeader: React.FC = () => {
    return (
        <div className={`${stylesPtDoc.table_title} row g-0 me-1`}>
            <div className="col-4 col-xs-4  col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2  ">
                <h6 className="ps-4">Patient</h6>
            </div>
            <div className="col-4 col-xs-4  col-sm-3 col-md-4 col-lg-4 col-xl-2 col-xxl-2  "><h6 className="ps-4">Document Title</h6></div>
            <div className="col-4 col-xs-4  col-sm-3 col-md-4 col-lg-4 col-xl-2 col-xxl-2  ">
                <h6 className="ps-4">Phone Number</h6>
            </div>
            <div className="col-xl-2 col-xxl-2 d-none d-xl-block d-xxl-block">
                <h6 className="ms-3">E-mail</h6>
            </div>
            <div className="col-xl-1 col-xxl-1 d-none d-xl-block d-xxl-block">
                <h6 className="ms-2">Created At</h6>
            </div>
            <div className="col-xl-3 col-xxl-3 d-none d-xl-block d-xxl-block">
                <h6 className="ms-5 ps-5">Document Type</h6>
            </div>
        </div>
    )
}

export default TableRowHeader;
