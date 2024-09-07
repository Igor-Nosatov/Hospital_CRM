import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/index.module.css";
import Chart from "react-apexcharts";
import doctorPhoto from "../../../../assets/img/bannerPhoto.png";
import { DoctorPersonalScore } from "../../store";

const DoctorScoreCard: React.FC<{ doctorPersonalScore: DoctorPersonalScore }> = ({ doctorPersonalScore }) => {
    const doctorId = localStorage.getItem('doctorId');

    const options = {
        chart: {
            fontFamily: "Urbanist, sans-serif",
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            categories: doctorPersonalScore.month_list,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
                borderRadius: 5,
                dataLabels: {
                    position: "top",
                    style: {
                        fontSize: "14px",
                        fontFamily: "Nunito, sans-serif",
                        colors: ["#000"],
                    },
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -25,
            style: {
                fontSize: "14px",
                fontWeight: 500,
                colors: ["#000"],
            },
        },
        grid: {
            show: false,
        },
        toolbar: {
            show: false,
        },
    };


    const series = [
        {
            name: "Visits",
            data: doctorPersonalScore.visit_list,
        },
    ];
    return (
        <div className={`${styles.wrapper__personal_score_card}`}>
            <div className={`${styles.personal_score_card} ms-1`}>
                <div className="row g-0">
                    <div className="col-6">
                        <h3
                            className={`${styles.personal_score_card_title}`}
                        >
                            Personal Score
                        </h3>
                        <Link to={`/doctor-profile/${doctorId}`}>
                            <img
                                src={doctorPhoto}
                                alt="Doctor Avatar"
                                className={`${styles.profile_photo} pl-3 mt-3`}
                            />
                        </Link>
                    </div>
                    <div className="col-6 pr-2">
                        <div className={`${styles.margin_arrow_icon_second} d-flex justify-content-end`}>
                            <Link to={`/doctor-profile/${doctorId}`}
                                className={`${styles.custom_arrow_icon} mb-5`}
                            >
                                &#x279A;
                            </Link>
                            <div
                                className={`${styles.custom_margin}`}
                            ></div>
                        </div>
                        <div className="d-flex flex-row justify-content-between ">
                            <div className={`${styles.wrapper__count_number_patients} d-flex flex-row justify-content-start`}>
                                <div
                                    className={`${styles.count_number_patients} fs-2 ps-4`}
                                >
                                    {doctorPersonalScore.total_patients}
                                </div>
                                <div
                                    className={`${styles.title_count_patients} d-flex flex-column`}
                                >
                                    <div
                                        className={`${styles.sub_title_count_patients_1}`}
                                    >
                                        Total
                                    </div>
                                    <div
                                        className={`${styles.sub_title_count_patients_2}`}
                                    >
                                        patients
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 pe-2 pt-1">
                                <span
                                    className={`${styles.score_year_patients}`}
                                >
                                    {doctorPersonalScore.current_year}
                                </span>
                            </div>
                        </div>
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            className={`${styles.column_chart} ms-1`}
                        />
                        <div
                            className={`${styles.star_rating} d-flex flex-row`}
                        >
                            <h4
                                className={`${styles.current_rating}`}
                            >
                                {doctorPersonalScore.doctor_rank.toFixed(1)}
                            </h4>
                            <div>
                                <div
                                    className={`${styles.max_rating}`}
                                >
                                    out of 5.0
                                </div>
                                <div
                                    className={`${styles.icon_star_block}`}
                                >
                                    <i
                                        className={`${styles.lni_star_fill} lni lni-star-fill`}
                                    ></i>
                                    <i
                                        className={`${styles.lni_star_fill} lni lni-star-fill`}
                                    ></i>
                                    <i
                                        className={`${styles.lni_star_fill} lni lni-star-fill `}
                                    ></i>
                                    <i
                                        className={`${styles.lni_star_fill} lni lni-star-fill`}
                                    ></i>
                                    <i
                                        className={`${styles.lni_star_fill} lni lni-star-fill `}
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default DoctorScoreCard;
