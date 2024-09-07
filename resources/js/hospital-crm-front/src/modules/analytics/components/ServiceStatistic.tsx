import React from "react";
import Chart from "react-apexcharts";
import stylesAl from "../style/index.module.css";
import { ServiceStatisticProps } from "../store";

const ServiceStatistic: React.FC<ServiceStatisticProps> = ({serviceStatistic}) => {
    const {
        patient_online_service,
        patient_offline_service,
    } = serviceStatistic;

    const chartServiceStatisticData = {
        options: {
          chart: {
            id: 'weekly-patients-chart',
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          },
        },
        series: [
          {
            name: 'Online Patients',
            data: patient_online_service,
          },
          {
            name: 'Offline Patients',
            data: patient_offline_service,
          },
        ],
      };

    return (
        <div className={`${stylesAl.analitic_card} min_block_width`}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                            <i className={`${stylesAl.cirlce_icon} lni lni-cart-full fs-3`}></i>
                            <h3 className="text-capitalize fs-4 mt-3">Service statistic</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-12">
                    <Chart options={chartServiceStatisticData.options} series={chartServiceStatisticData.series} type="line" height={400} />
                </div>
            </div>
        </div>
    );
}

export default ServiceStatistic;
