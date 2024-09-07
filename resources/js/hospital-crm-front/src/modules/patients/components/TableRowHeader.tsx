import React from "react";
import stylesPt from "../style/index.module.css";
import { headers } from "../const/tablePatientHeaders";

const TableRowHeader: React.FC = () => {
    return (
        <div className={`${stylesPt.table_title} row g-0 me-1 min_block_width`}>
            {headers.map((header, index) => (
                <div key={index} className={header.classes}>
                    <h6 className={header.extraClasses}>{header.text}</h6>
                </div>
            ))}
        </div>
    );
}

export default TableRowHeader;
