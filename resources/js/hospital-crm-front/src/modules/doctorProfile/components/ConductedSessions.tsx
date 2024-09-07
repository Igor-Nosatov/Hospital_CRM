import stylesDp from '../style/index.module.css';
import Pagination from '../../patients/components/Pagination';

const ConductedSessions = ({ visitsForMonth, visitsForMonthMeta, onPageChange }) => {
    return (
        <div className="row g-0">
            <div className="col-12 d-none d-xl-block d-xxl-block ">
                <div className={`${stylesDp.card_profile}`}>
                    <h3 className="text-dark pb-3 pt-1">Latest patient visits</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Patient</th>
                                <th scope="col" className={`${stylesDp.table_column_adds}`}>Date Birth</th>
                                <th scope="col" className={`${stylesDp.table_column_adds}`}>Visit Date</th>
                                <th scope="col">Complaints</th>
                                <th scope="col">Symptoms</th>
                                <th scope="col">Treatment</th>
                                <th scope="col">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visitsForMonth.map((visit) => (
                                <tr key={visit.id}>
                                    <td>{visit.first_name} {visit.last_name}</td>
                                    <td>{visit.date_of_birth}</td>
                                    <td>{visit.visit_date}</td>
                                    <td>{visit.complaints}</td>
                                    <td>{visit.symptoms}</td>
                                    <td>{visit.treatment}</td>
                                    <td>{visit.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        patientMetaData={visitsForMonthMeta}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConductedSessions;
