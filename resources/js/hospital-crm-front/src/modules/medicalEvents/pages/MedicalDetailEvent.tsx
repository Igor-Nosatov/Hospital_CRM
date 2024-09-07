
import React from 'react';
import EventFeedbackForm from '../components/MedicalDetailEvent/MedicalEventFeedbackForm.tsx';
import Agenda from '../components/MedicalDetailEvent/Agenda.tsx';
import { AppDispatch } from '../../../store/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedicalEventByIdData } from '../store/actions.ts';
import { useParams } from 'react-router-dom';
import {
    selectError,
    selectLoading,
    selectMedicalEventAgenda,
    selectMedicalEventId
}
    from '../store/selectors.ts';

const MedicalDetailEvent = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const medicalEventAgenda = useSelector(selectMedicalEventAgenda);
    const medicalEventId = useSelector(selectMedicalEventId)

    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchMedicalEventByIdData(Number(id)));
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className="col-12 pb-4">
                <div className="row g-0">
                    <div className="col-6">
                        <h3 className="pt-3 ps-2 text-dark text-capitalize">Medicine Conference - Modern Medicine</h3>
                    </div>
                </div>
            </div>
            <div className="col-12 pb-4">
                <div className="row g-0">
                    <div className="col-12 col-sm-12 col-md-6 pe-5">
                        <Agenda medicalEventAgenda={medicalEventAgenda} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 pt-4 mt-3 pe-5">
                        <EventFeedbackForm medicalEventId={medicalEventId} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MedicalDetailEvent;
