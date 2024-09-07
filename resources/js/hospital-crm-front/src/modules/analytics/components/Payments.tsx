// src/components/PaymentsCard.tsx
import React from 'react';
import Chart from 'react-apexcharts';
import stylesAl from '../style/index.module.css';

interface PaymentsCardProps {
    payments: {
        month: string[];
        amount: number[];
    };
}

const Payments: React.FC<PaymentsCardProps> = ({ payments }) => {
    const optionsPayment = {
        chart: {
            id: 'line-chart'
        },
        xaxis: {
            categories: payments.month
        },
        yaxis: {
            title: {
                text: 'Amount'
            }
        },
        title: {
            text: 'Payment Comparison by Cash and Insurance for a month'
        },
        colors: ['#008FFB', '#00E396'],
        markers: {
            size: 1
        }
    };

    return (
        <div className={`${stylesAl.analitic_card} min_block_width container-fluid`}>
            <div className="row g-0">
                <div className="col-12">
                    <div className="d-flex flex-row">
                        <i className={`${stylesAl.cirlce_icon} lni lni-coin fs-3`}></i>
                        <h3 className="text-capitalize fs-4 mt-3">Payments</h3>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-12">
                    <div className={`${stylesAl.card_balance_payment} ms-3 me-3 mt-2 mb-2`}>
                        <div className="row g-0">
                            <div className="col-6">
                                <div className="d-flex flex-row">
                                    <i className={`${stylesAl.cirlce_icon} lni lni-dollar fs-3`}></i>
                                    <div className="d-flex flex-column pt-3">
                                        <p className="text-dark position-relative">$ 2000</p>
                                        <p className={`${stylesAl.card_balance_payment_subtitle} text-capitalize text-secondary position-relative`}>By Cash</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex flex-row">
                                    <i className={`${stylesAl.cirlce_icon} lni lni-money-protection fs-3`}></i>
                                    <div className="d-flex flex-column pt-3">
                                        <p className="text-dark position-relative">$ 23000</p>
                                        <p className={`${stylesAl.card_balance_payment_subtitle} text-capitalize text-secondary position-relative`}>By Insurance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="line-chart pt-2">
                        <Chart
                            options={optionsPayment}
                            series={[
                                {
                                    name: 'Payments',
                                    data: payments.amount
                                }
                            ]}
                            type="line"
                            height="300px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
