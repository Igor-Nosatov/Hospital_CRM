import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppDispatch } from "../../../store/index.ts";
import {
    selectError,
    selectLoading,
    selectPatientList,
    selectPatientMetaData,
    selectCurrentPage,
    selectSearchQuery,
} from "../store/selector";
import { fetchPatientPaginationData, deletePatient } from "../store/actions.ts";
import TitleBar from "../components/TitleBar.tsx";
import Pagination from "../components/Pagination.tsx";
import TableRowHeader from "../components/TableRowHeader.tsx";
import TableRowContent from "../components/TableRowContent.tsx";
import { setPage, setSearchQuery } from "../store/patientSlice.ts";

const Patient: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const patientList = useSelector(selectPatientList);
    const patientMetaData = useSelector(selectPatientMetaData);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const searchQuery = useSelector(selectSearchQuery);

    React.useEffect(() => {
        dispatch(
            fetchPatientPaginationData({
                page: currentPage,
                search: searchQuery,
            })
        );
    }, [dispatch, currentPage, searchQuery]);

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
    };

    const handleSearch = (search: string) => {
        dispatch(setSearchQuery(search));
        dispatch(setPage(1));
    };

    const handleDeletePatient = async (id: number) => {
        const result = await dispatch(deletePatient(id));
        if (deletePatient.fulfilled.match(result)) {
            dispatch(
                fetchPatientPaginationData({
                    page: currentPage,
                    search: searchQuery,
                })
            );
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min_block_width ps-1">
            <div className="col-12 patient_filters pe-5 min_block_width">
                <TitleBar onSearch={handleSearch} />
            </div>
            <div className="col-12 patient_table pt-5 pe-5 ps-1 min_block_width">
                <TableRowHeader />
            </div>
            {patientList &&
                patientList.map((patient) => (
                    <TableRowContent
                        key={patient.id}
                        patient={patient}
                        onDelete={handleDeletePatient}
                    />
                ))}
            <div className="col-12 patient_pagination pt-3 pb-5 min_block_width">
                {patientMetaData && (
                    <Pagination
                        patientMetaData={patientMetaData}
                        onPageChange={handlePageChange}
                    />
                )}
            </div>
        </div>
    );
};

export default Patient;
