import React from "react";
import stylesPtDoc from "../style/index.module.css";
import patientAvatar1 from "../../../assets/img/patientAvatar1.png";
import { PatientDocsData } from "../store/types";

interface TableRowContentProps {
    document: PatientDocsData;
}

const TableRowContent: React.FC<TableRowContentProps> = ({ document }) => {

    const {
        patient_full_name,
        date_of_birth,
        title,
        phone_number,
        email,
        created_at,
        document_type,
    } = document;

    return (
        <div className={`${stylesPtDoc.table_main_content} row me-1 mt-3`}>
            <div className="col-4 col-xs-4  col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2  ">
                <div className={`${stylesPtDoc.table_pt_fullname} d-flex flex-row`}>
                    <img
                        src={patientAvatar1}
                        alt=""
                        className={`${stylesPtDoc.patient_avatar_img}`}
                    />
                    <div className="ps-2">
                        <h6 className="text-dark">{patient_full_name}</h6>
                        <p className="text-secondary">Birthday: {date_of_birth}</p>
                    </div>
                </div>
            </div>
            <div className="col-4 col-xs-4  col-sm-3 col-md-4 col-lg-4 col-xl-2 col-xxl-2  ">
                <p className="text-dark fs-6 pt-3">{title}</p>
            </div>
            <div className="col-4 col-xs-4  col-sm-3 col-md-4 col-lg-4 col-xl-2 col-xxl-2  ">
                <p className="text-dark fs-6 pt-3 ps-1">{phone_number}</p>
            </div>
            <div className="col-xl-2 col-xxl-2 d-none d-xl-block d-xxl-block">
                <p className="text-dark fs-6 pt-3">{email}</p>
            </div>
            <div className="col-xl-1 col-xxl-1 d-none d-xl-block d-xxl-block">
                <p className="text-dark fs-6 pt-3 ps-2">{created_at}</p>
            </div>
            <div className="col-xl-3 col-xxl-3 d-none d-xl-block d-xxl-block ps-5">
                <p className="text-dark fs-6 pt-3 ps-5">{document_type}</p>
            </div>
        </div>
    )
}
export default TableRowContent;




