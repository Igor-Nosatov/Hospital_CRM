
import React from 'react';
import CardEvent from '../components/MedicalEvent/CardEvents.tsx';
import EventPagination from '../components/MedicalEvent/EventPagination.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../store/index.ts';
import { fetchMedicalEventsData } from '../store/actions.ts';
import { selectCurrentPage, selectError, selectLoading, selectMedicalEventsList, selectMedicalEventsMetaData } from '../store/selectors.ts';
import { setPage } from '../store/medicalEventSlice.ts';
import stylesMe from "../style/index.module.css";

const MedicineEvent = () => {
    const dispatch = useDispatch<AppDispatch>();

    const medicalEventsList = useSelector(selectMedicalEventsList);
    const medicalEventsMetaData = useSelector(selectMedicalEventsMetaData);
    const currentPage = useSelector(selectCurrentPage);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchMedicalEventsData({ page: currentPage }));
    }, [dispatch, currentPage]);

    const handlePageChange = (page: number) => {
        dispatch(setPage(page));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className={`${stylesMe.min_width_for_block} row g-0`}>
                <div className="col-12 ">
                    <div className="row g-0">
                        <div className="col-6">
                            <h3 className="pt-3 ps-2 text-dark text-capitalize">Medicine Conferences (Online/Offline)</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${stylesMe.min_width_for_block} row g-0 d-flex flex-row`}>
                {medicalEventsList && medicalEventsList.map((medicalEvent) => (
                    <div className="col-12 col-sm-12 col-md-6 pt-4 ps-2 pe-1">
                        <CardEvent key={medicalEvent.event_id} medicalEvent={medicalEvent} />
                    </div>
                ))}
            </div>
            <div className={`${stylesMe.min_width_for_block} row g-0`}>
                <div className="col-12 pt-3 pb-5">
                    <EventPagination medicalEventsMetaData={medicalEventsMetaData} onPageChange={handlePageChange} />
                </div>
            </div>
        </>
    );
};

export default MedicineEvent;
