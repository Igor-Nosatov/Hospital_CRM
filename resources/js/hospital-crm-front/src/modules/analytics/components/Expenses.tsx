import React from "react";
import Chart from "react-apexcharts";
import stylesAl from "../style/index.module.css";
import { ApexOptions } from "apexcharts";
import { ExpensesProps } from "../store";

const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
    const {
        medical_expense_type,
        amount
    } = expenses;

    const chartExpensesData = {
        options: {
            labels: medical_expense_type || [],
            colors: ['#FF5733', '#FFC300', '#36A2EB', '#FF6384', '#4BC0C0'],
            legend: {
                position: 'bottom',
            },
        } as ApexOptions,
        series: amount || [],
    };

    return (
        <div className={`${stylesAl.analitic_card} min_block_width`}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row">
                        <i className={`${stylesAl.cirlce_icon} lni lni-bar-chart fs-3`}></i>
                        <h3 className="text-capitalize fs-4 mt-3">Expenses</h3>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-12">
                    <Chart
                        options={chartExpensesData.options}
                        series={chartExpensesData.series}
                        type="donut"
                        height={450}
                    />
                </div>
            </div>
        </div>
    );
}

export default Expenses;
