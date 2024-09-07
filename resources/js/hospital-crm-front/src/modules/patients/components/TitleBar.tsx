import React, { useState } from "react";
import stylesPt from "../style/index.module.css";
import AddNewPatient from "./AddNewPatient/index";
import { TitleBarProps } from "../store";

const TitleBar: React.FC<TitleBarProps> = ({ onSearch }) => {
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="row g-0 min_block_width ps-2">
            <div className="col-1 col-sm-1 col-md-1 col-lg-2 col-xl-1 col-xxl-1">
                <h3 className="pt-4 ps-1 pe-3 me-4">Patients</h3>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 pt-3 ">
            <form className={`${stylesPt.search_form}`} onSubmit={handleSearchSubmit}>
                    <input
                        type="search"
                        className={`${stylesPt.input_search}`}
                        placeholder="Search patients..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className="col-12 col-sm-12 col-md-12 offset-lg-2 col-lg-5 offset-xl-4 col-xl-4 offset-xxl-5 col-xxl-3 pt-2">
                <div
                    className={`${stylesPt.filter_block} d-flex flex-row`}
                >
                    <button className={`${stylesPt.add_btn}`} onClick={handleShow}>
                        <span
                            className={`${stylesPt.mark_plus} pe-1 pt-1`}
                        >
                            +
                        </span>
                        Add New Patient
                    </button>
                </div>
            </div>

            {showModal && <AddNewPatient handleClose={handleClose} />}
        </div>
    );
}

export default TitleBar;
