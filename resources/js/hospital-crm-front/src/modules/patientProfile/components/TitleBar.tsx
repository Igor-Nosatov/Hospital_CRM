import React from "react";
import stylesDp from "../style/index.module.css";
import arrow from "../../../assets/img/arrow-left.png";

const TitleBar: React.FC = ({generalInfo}) => {
    return (
        <div className="row g-0">
            <div className="col-6">
                <h3 className="pt-3 ps-1">
                    Patient List
                    <img
                        src={arrow}
                        alt=""
                        className={`${stylesDp.arrow_right} mt-3 ms-1`}
                    />
                    <span className="ps-3 text-secondary fs-4">
                        {generalInfo.full_name}
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default TitleBar;
