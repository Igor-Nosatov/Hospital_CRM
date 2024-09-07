import React from "react";
import stylesPtDoc from "../style/index.module.css";
import CreateNewDoc from "./CreateNewDoc";

interface SubBarProps {
    onSearch: (search: string) => void;
}

const SubBar: React.FC<SubBarProps> = ({ onSearch }) => {
    const [showModal, setShowModal] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState("");

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <div className="row g-0 min_block_width">
            <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xl-4">
                <h3 className="pt-4 ps-3 pe-3 me-4">Patient Documents</h3>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xl-4 pt-3">
                <form className={`${stylesPtDoc.search_form}`} onSubmit={handleSearchSubmit}>
                    <input
                        type="search"
                        className={`${stylesPtDoc.input_search}`}
                        placeholder="Search patient docs..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                </form>
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col-xl-4 pt-2">
                <div className={`${stylesPtDoc.filter_block} d-flex flex-row`}>
                    <button className={`${stylesPtDoc.add_btn}`} onClick={openModal}>
                        <span className={`${stylesPtDoc.mark_plus} pe-1 pt-1`}>+</span>
                        Add New Doc
                    </button>
                </div>
            </div>
            {showModal && <CreateNewDoc closeModal={closeModal} />}
        </div>
    );
};

export default SubBar;
