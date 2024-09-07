import React from "react";
import stylesAl from "../style/index.module.css";
import { TopServicesProps } from "../store";

const TopServices: React.FC<TopServicesProps> = ({ topServices }) => {
    return (
        <div className={`${stylesAl.analitic_card} ps-1 pe-1 pb-4 min_block_width`}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                            <i className={`${stylesAl.cirlce_icon} lni lni-handshake fs-3`}></i>
                            <h3 className="text-capitalize fs-4 mt-3">Top Services</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0 ps-3 pe-3 pt-4 pb-2 ">
                <div className="col-6">
                    <p className="text-capitalize">Service</p>
                </div>
                <div className="col-3">
                    <p className="text-capitalize">Count</p>
                </div>
                <div className="col-3">
                    <p className="text-capitalize text-end pe-3">Price</p>
                </div>
            </div>
            {topServices && topServices.map((service, index) => (
                <div key={index} className="row g-0 ps-3 pe-3">
                    <div className="col-6 border-top pt-2">
                        <p className="text-capitalize">{service.service_name}</p>
                    </div>
                    <div className="col-3 border-top pt-2">
                        <p className="text-capitalize ps-3">{service.service_count_used}</p>
                    </div>
                    <div className="col-3 border-top pt-2">
                        <p className="text-capitalize text-end pe-3">${service.service_price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TopServices;
