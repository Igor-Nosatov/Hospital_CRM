import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSearchPatient } from "../../store/selectors";
import { searchPatients } from "../../store/actions";

interface SearchModalProps {
    show: boolean;
    handleClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const patients = useSelector(selectSearchPatient);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (show) {
            dispatch(searchPatients(""));
        }
    }, [show, dispatch]);

    const handleSearch = () => {
        dispatch(searchPatients(searchTerm));
    };

    return (
        <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Search Patients</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body" style={{ maxHeight: "300px", overflowY: "auto" }}>
                        <input
                            type="text"
                            className="form-control mb-2"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Enter patient name"
                        />
                        { (
                            <ul>
                                {patients.map((patient: Patient) => (
                                    <li key={patient.id}>
                                        <Link to={`/patient-profile/${patient.id}`}>
                                            {patient.first_name} {patient.last_name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-save" onClick={handleSearch}>
                            Search
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
