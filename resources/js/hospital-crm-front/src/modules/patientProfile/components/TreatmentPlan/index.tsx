import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import stylesDp from "../../style/index.module.css";
import AddNewTreatmantPlan from "./AddNewTreatmantPlan.tsx";
import Pagination from "../../../patients/components/Pagination.tsx";
import { RootState } from "../../../../store/index.ts";
import { fetchTreatmentPlan } from "../../store/actions.ts";

interface TreatmentPlanProps {
    patientId: number;
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const
    TreatmentPlan: React.FC<TreatmentPlanProps> = ({ patientId, currentPage, onPageChange }) => {
        const dispatch = useDispatch();

        const treatmentPlan = useSelector((state: RootState) => state.patientProfileTreatment.treatmentData);
        const loading = useSelector((state: RootState) => state.patientProfileTreatment.loading);
        const error = useSelector((state: RootState) => state.patientProfileTreatment.error);
        const metaData = useSelector((state: RootState) => state.patientProfileTreatment.treatmentMeta);
        const [showAddNewTreatmantPlan, setShowAddNewTreatmantPlan] = React.useState(false);

        useEffect(() => {
            console.log(treatmentPlan);
            console.log(currentPage);
            if (treatmentPlan.length <= 0 || metaData.current_page !== currentPage) {
                dispatch(fetchTreatmentPlan({ patientId, page: currentPage }));
            }
        }, [dispatch, patientId, currentPage, metaData, treatmentPlan]);

        const openAddNewTreatmantPlan = () => {
            setShowAddNewTreatmantPlan(true);
        };

        const closeAddNewTreatmantPlan = () => {
            setShowAddNewTreatmantPlan(false);
        };

        const handlePageChange = (newPage: number) => {
            onPageChange(newPage);
        };

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <>
                <div className={`${stylesDp.card_small_1} min_block_width`}>
                    <div>
                        <div
                            className={`${stylesDp.card_header} d-flex flex-row justify-content-between pt-3`}
                        >
                            <div className="d-flex flex-row justify-content-start">
                                <div>
                                    <i
                                        className={`${stylesDp.card_icon} ${stylesDp.card_bg4} lni lni-first-aid fs-3 ms-3`}
                                    ></i>
                                </div>
                                <p className="text-dark fs-4 fw-bold ps-2 mt-2">
                                    Treatment plan
                                </p>
                            </div>

                            <div className="d-flex flex-row justify-content-end">
                                <div className="fs-2">
                                    <i
                                        className={`${stylesDp.lni_plus} lni lni-plus fs-3 me-2`}
                                        onClick={openAddNewTreatmantPlan}
                                    ></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-dark fw-bold ps-4 pt-3 ">
                            Latest medications
                        </p>
                        {treatmentPlan.map((plan) => (
                            <div key={plan.id} className="medication_card border-bottom pt-3 row g-0">
                                <div className="col-5 d-flex flex-row">
                                    <p className="text-dark fs-6 ms-3">
                                        <i
                                            className={`${stylesDp.lni_capsule} lni lni-capsule fs-4 me-2`}
                                        ></i>
                                        {plan.medicament_name}
                                        <span className="text-secondary ms-3">
                                            {plan.medication_dosage}
                                        </span>
                                    </p>
                                </div>
                                <div className="col-1">
                                    <p className=" fs-6 pt-2 ms-2 mt-2">{plan.medication_frequency}x</p>
                                </div>
                                <div className="col-4">
                                    <p className=" fs-6 pt-2 ms-5 mt-1">
                                        <i className="lni lni-sun me-2 ms-1 mt-1"></i>
                                        and
                                        <i className="lni lni-night ms-1 mt-1"></i>
                                    </p>
                                </div>
                                <div className="col-2">
                                    <p className="pt-2 mt-2">{plan.medication_timing}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`${stylesDp.wrapper__pagination_treatment_plan}`}>
                        <Pagination patientMetaData={metaData} onPageChange={handlePageChange} />
                    </div>
                </div>
                <AddNewTreatmantPlan show={showAddNewTreatmantPlan} handleClose={closeAddNewTreatmantPlan} patientId={patientId} />
            </>
        );
    };

export default TreatmentPlan;
