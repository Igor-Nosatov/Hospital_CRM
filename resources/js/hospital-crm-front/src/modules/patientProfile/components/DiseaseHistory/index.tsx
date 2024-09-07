import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../config/http-common";
import stylesDp from "../../style/index.module.css";
import CreateNewDiseaseHistoryModal from "./CreateNewDiseaseHistory";
import { DiseaseHistoryData, DiseaseHistoryProps } from "../../store/types";
import { AppDispatch } from "../../../../store";
import { useDispatch, useSelector } from 'react-redux';
import { selectDiseaseLatestHistory } from "../../store/selectors";

const DiseaseHistory: React.FC<DiseaseHistoryProps> = ({ patientId }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [diseaseHistory, setDiseaseHistory] = useState<DiseaseHistoryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [showAllHistoryModal, setShowAllHistoryModal] = useState(false);
    const [showCreateNewHistoryModal, setShowCreateNewHistoryModal] = useState(false);

    const fetchDiseaseHistory = async (patientId: number) => {
        try {
            const response = await axiosInstance.get(`/disease-history/latest/${patientId}`);
            const data = response.data.data;
            const formattedData = {
                ...data,
                date_of_onset: new Date(data.date_of_onset).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                }),
            };
            setDiseaseHistory(formattedData);
        } catch (error) {
            setError("Error fetching disease history");
            console.error("Error fetching disease history:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDiseaseHistory(patientId);
    }, [patientId]);

    const openCreateNewDiseaseHistory = () => setShowCreateNewHistoryModal(true);
    const closeCreateNewDiseaseHistory = () => setShowCreateNewHistoryModal(false);

    const {
        date_of_onset,
        diagnosis,
        test_results,
        symptoms
    } = diseaseHistory || {};

    const hasData = date_of_onset || diagnosis || test_results || symptoms;

    return (
        <>
            <div className={`${stylesDp.card_small_1} min_block_width pt-3`}>
                <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row justify-content-start">
                        <div>
                            <i className={`${stylesDp.card_icon} ${stylesDp.card_bg3} lni lni-clipboard fs-3 ms-3`}></i>
                        </div>
                        <p className="text-dark fs-4 fw-bold ps-2 mt-2">Disease History</p>
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                        <div className="fs-2">
                            <i
                                className={`${stylesDp.lni_plus} lni lni-plus fs-3 me-2`}
                                onClick={openCreateNewDiseaseHistory}
                            ></i>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : hasData ? (
                    <div className="row g-0 mb-5">
                        <div className="col-6 ps-2 pe-2">
                            <div className={`${stylesDp.card_general_info} ms-3 me-3`}>
                                <p className="text-secondary ms-4">Date of Onset</p>
                                <p className={`${stylesDp.text_general_info} ms-4`}>{date_of_onset}</p>
                            </div>
                        </div>
                        <div className="col-6 ps-2 pe-2">
                            <div className={`${stylesDp.card_general_info} ms-3 me-3`}>
                                <p className="text-secondary ms-4">Diagnosis</p>
                                <p className={`${stylesDp.text_general_info} ms-4`}>{diagnosis}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="ms-3 me-3">
                                <h5 className="text-secondary ps-3 pe-3 pt-3">Test Results</h5>
                                <p className="text-dark ps-3 pe-3">{test_results}</p>
                                <h5 className="text-secondary ps-3 pe-3">Symptoms</h5>
                                <p className="text-dark pb-3 ps-3 pe-3">{symptoms}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>No Data Available</div>
                )}
            </div>
            {showCreateNewHistoryModal && (
                <CreateNewDiseaseHistoryModal
                    modalId="createNewDiseaseHistoryModal"
                    onClose={closeCreateNewDiseaseHistory}
                    patientId={patientId}
                />
            )}
        </>
    );
}

export default DiseaseHistory;
