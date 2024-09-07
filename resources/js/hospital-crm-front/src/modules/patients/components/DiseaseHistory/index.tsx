import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { selectDiseaseHistory, selectError } from '../../store/selector';
import { DiseaseHistoryProps, fetchDiseaseHistory } from '../../store';

const DiseaseHistory: React.FC<DiseaseHistoryProps> = ({ show, handleClose, patientId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useSelector(selectDiseaseHistory);
    const error = useSelector(selectError);
    const modalRef = useRef<HTMLDivElement>(null);
    const [localLoading, setLocalLoading] = useState<boolean>(false);

    useEffect(() => {
        if (show) {
            setLocalLoading(true);
            dispatch(fetchDiseaseHistory(patientId)).finally(() => setLocalLoading(false));
        }
    }, [show, patientId, dispatch]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (show) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [show, handleClose]);

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content" ref={modalRef}>
                    <div className="modal-header">
                        <h5 className="modal-title">Report</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {localLoading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {!localLoading && !error && (!data || Object.keys(data).length === 0) && <p>No content available</p>}
                        {data && Object.keys(data).length > 0 && !localLoading && (
                            <div>
                                <p>Date of Onset: {data.date_of_onset}</p>
                                <p>Diagnosis: {data.diagnosis}</p>
                                <p>Test Results: {data.test_results}</p>
                                <p>Symptoms: {data.symptoms}</p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseaseHistory;
