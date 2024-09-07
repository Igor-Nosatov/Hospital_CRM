import React, { useEffect } from "react";
import stylesDp from "../../style/index.module.css";
import photo_diagnostic from "../../../../assets/img/heart.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
    selectLaboratoryTests,
    selectMetaDataLaboratoryTests,
} from "../../store/selectors";
import { fetchLabTestList } from "../../store";
import Pagination from "../../../patients/components/Pagination";
import UploadNewLabTest from "./UploadNewLabTest";

interface LabTestSectionProps {
    patientId: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const LabTestSection: React.FC<LabTestSectionProps> = ({
    patientId,
    currentPage,
    onPageChange,
}) => {
    const dispatch = useDispatch();
    const medicalTestData = useSelector(selectLaboratoryTests);
    const metaData = useSelector(selectMetaDataLaboratoryTests);

    const [showUploadNewLabTest, setShowUploadNewLabTest] =
        React.useState(false);
    const openUploadNewLabTest = () => setShowUploadNewLabTest(true);
    const closeUploadNewLabTest = () => setShowUploadNewLabTest(false);

    useEffect(() => {
        if (!medicalTestData || metaData.current_page !== currentPage) {
            dispatch(fetchLabTestList({ patientId, page: currentPage }));
        }
    }, [dispatch, patientId, currentPage, medicalTestData, metaData]);

    return (
        <div className={`${stylesDp.card_small} mt-4 min_block_width`}>
            <div
                className={`${stylesDp.card_header} d-flex flex-row justify-content-between pt-3`}
            >
                <div className="d-flex flex-row justify-content-start">
                    <div>
                        <i
                            className={`${stylesDp.card_icon} ${stylesDp.card_bg1} lni lni-microscope fs-3 ms-3`}
                        ></i>
                    </div>
                    <p className="text-dark fs-4 fw-bold pt-2 ps-2">
                        Laboratory Tests
                    </p>
                </div>
                <div className="d-flex flex-row justify-content-end">
                <div className="fs-2">
                        <i
                           className={`${stylesDp.lni_plus} lni lni-plus fs-3 me-2`}
                            onClick={openUploadNewLabTest}
                        ></i>
                    </div>
                </div>
            </div>
            <div className={`${stylesDp.card_general_info_list} row g-0`}>
                <div className="col-6">
                    <div className={`${stylesDp.card_general_info_1} ms-3 me-3`}>
                        {medicalTestData.length > 0 ? (
                            <>
                                <p className="text-secondary ms-4">
                                    {medicalTestData[0].title}
                                </p>
                                <p
                                    className={`${stylesDp.text_general_info} ms-4`}
                                >
                                    {
                                        medicalTestData[0]
                                            .date_of_medical_analysis
                                    }
                                </p>
                                <img
                                    src={photo_diagnostic}
                                    alt=""
                                    className={`${stylesDp.photo_diagnostic}`}
                                />
                            </>
                        ) : (
                            <>
                                <p className="text-secondary ms-4">
                                    Fluorography of the heart
                                </p>
                                <p
                                    className={`${stylesDp.text_general_info} ms-4`}
                                >
                                    21 March 2023
                                </p>
                                <img
                                    src={photo_diagnostic}
                                    alt=""
                                    className={`${stylesDp.photo_diagnostic}`}
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="col-6 ps-3 pt-5 mt-2">
                    <div className="d-flex flex-column pt-5">
                        {medicalTestData &&
                            medicalTestData.map((medicalTest) => (
                                <div
                                    key={medicalTest.id}
                                    className={`${stylesDp.laboratory_test_desc} d-flex flex-row justify-content-between me-4 mt-2`}
                                >
                                    <div>
                                        <p className="text-dark">
                                            {medicalTest.title}
                                        </p>
                                        <p
                                            className={`${stylesDp.laboratory_test_subtitle} text-secondary`}
                                        >
                                            {
                                                medicalTest.date_of_medical_analysis
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <a
                                            href={medicalTest.file_path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="lni lni-cloud-download fs-3 pe-1 mt-2"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="row g-0 ">
                <div className="col-12">
                    <div className={`${stylesDp.wrapper__pagination_lab_test}`}>
                        {metaData && (
                            <Pagination
                                patientMetaData={metaData}
                                onPageChange={onPageChange}
                            />
                        )}
                    </div>
                </div>
            </div>
            {showUploadNewLabTest && (
                <UploadNewLabTest
                    modalId="UploadNewLabTest"
                    onClose={closeUploadNewLabTest}
                    patientId={patientId}
                />
            )}
        </div>
    );
};

export default LabTestSection;
