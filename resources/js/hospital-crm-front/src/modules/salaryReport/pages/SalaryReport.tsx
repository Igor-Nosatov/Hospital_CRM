import React from 'react';
import stylesSr from "../style/index.module.css";
import TableRowContent from '../components/TableRowContent.tsx';
import TableRowHeader from '../components/TableRowHeader.tsx';
import SalaryCount from '../components/SalaryCount.tsx';
import { AppDispatch } from '../../../store/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSalaryReportData } from '../store/actions.ts';
import { selectError, selectLoading, selectSalaryCount, selectSalaryListByMonth } from '../store/selectors.ts';
import { SalaryListByMonth } from '../store/types.ts';

const SalaryReport = () => {
    const dispatch = useDispatch<AppDispatch>();

    const salaryListByMonth = useSelector(selectSalaryListByMonth);
    const salaryCount = useSelector(selectSalaryCount);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchSalaryReportData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="container-fluid min_block_width pe-5">
                <div className="row g-0 pb-2">
                    <div className="col-12">
                        <h3 className="pt-3 ps-3 text-dark text-capitalize">Salary Report
                            <i className={`${stylesSr.lni_chevron_right} lni lni-chevron-right fs-3 ms-3`}></i> Doctor {salaryCount.doctor_full_name}</h3>
                        <p className='ps-3 text-secondary text-capitalize fs-4'>{salaryCount.salary_for_next_date}</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className={`${stylesSr.table_salary_report} ps-3 pe-4`}>
                        <TableRowHeader />
                        {salaryListByMonth && salaryListByMonth.map((salary: SalaryListByMonth) => (
                            <TableRowContent key={salary.id} salary={salary} />
                        ))}
                    </div>
                </div>
                <div className="col-12 pt-3 pb-5">
                    <SalaryCount salaryCount={salaryCount} />
                </div>
            </div>
        </>
    );
};

export default SalaryReport;
