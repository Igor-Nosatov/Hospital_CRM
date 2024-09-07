// src/components/Analytics.tsx
import React from 'react';
import TopServices from '../components/TopServices.tsx';
import Expenses from '../components/Expenses.tsx';
import ServiceStatistic from '../components/ServiceStatistic.tsx';
import PatientVisitsForMonth from '../components/PatientVisitsForMonth.tsx';
import Payments from '../components/Payments.tsx';
import { AppDispatch } from '../../../store/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyticsData } from '../store/actions.ts';
import {
    selectEarningReport,
    selectTopServices,
    selectExpenses,
    selectServiceStatistic,
    selectError,
    selectLoading,
    selectPayments,
    selectTopPatientVisitsForMonth,
} from '../store/selectors.ts';

const Analytics = () => {
    const dispatch = useDispatch<AppDispatch>();
    const earningReport = useSelector(selectEarningReport);
    const topServices = useSelector(selectTopServices);
    const expenses = useSelector(selectExpenses);
    const serviceStatistic = useSelector(selectServiceStatistic);
    const topPatientVisitsForMonth = useSelector(selectTopPatientVisitsForMonth);
    const payments = useSelector(selectPayments);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchAnalyticsData());
    }, [dispatch]);

    const allDataLoaded = !loading && earningReport && topServices && expenses && serviceStatistic && topPatientVisitsForMonth && payments;

    if (loading || !allDataLoaded) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="col-12 pe-3">
                <div className="row g-0">
                    <div className="col-6">
                        <h3 className="pt-3 ps-3">Analytics</h3>
                    </div>
                </div>
                <div className="row g-0 pt-2 ps-1 pe-2">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 pe-2 pb-2">
                        <TopServices topServices={topServices} />
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 pb-2 pe-2">
                        <Expenses expenses={expenses} />
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4 pe-2 pb-2">
                        <PatientVisitsForMonth topPatientVisitsForMonth={topPatientVisitsForMonth} />
                    </div>
                </div>
                <div className="row g-0 pt-2 ps-1 pe-2">
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pe-2 pb-2">
                        <ServiceStatistic serviceStatistic={serviceStatistic} />
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 pe-2">
                        <Payments payments={payments} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Analytics;
