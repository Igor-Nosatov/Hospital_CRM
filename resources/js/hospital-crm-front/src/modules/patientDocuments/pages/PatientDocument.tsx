import React from "react";
import TableRowContent from "../components/TableRowContent.tsx";
import SubBar from "../components/SubBar.tsx";
import TableRowHeader from "../components/TableRowHeader.tsx";
import Pagination from "../components/Pagination.tsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage, selectDocumentList, selectDocumentMetaData, selectError, selectLoading, selectSearchQuery } from "../store/selectors.ts";
import { fetchPatientDocumentData } from "../store/actions.ts";
import { setPage, setSearchQuery } from "../store/patientDocumentSlice.ts";
import { AppDispatch } from "../../../store/index.ts";

const PatientDocument: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const documentList = useSelector(selectDocumentList);
    const documentMetaData = useSelector(selectDocumentMetaData);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const currentPage = useSelector(selectCurrentPage);
    const searchQuery = useSelector(selectSearchQuery);

    React.useEffect(() => {
        dispatch(fetchPatientDocumentData({ page: currentPage, search: searchQuery }));
    }, [dispatch, currentPage, searchQuery]); 


    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
    };

    const handleSearch = (search: string) => {
        dispatch(setSearchQuery(search));
        dispatch(setPage(1));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="min_width_for_block">
            <div className="col-12 patient_filters pe-5">
                <SubBar onSearch={handleSearch}/>
            </div>

            <div className="col-12 patient_table pt-5 pe-5 ps-1">
                <TableRowHeader />
            </div>

            <div className="col-12 patient_table pt-2 pe-5 ps-3">
                {documentList && documentList.map((document) => (
                    <TableRowContent key={document.id} document={document} />
                ))}
            </div>
            <div className="col-12 patient_pagination pt-3 pb-5">
                <Pagination documentMetaData={documentMetaData} onPageChange={handlePageChange}/>
            </div>
        </div>
    );
};

export default PatientDocument;
