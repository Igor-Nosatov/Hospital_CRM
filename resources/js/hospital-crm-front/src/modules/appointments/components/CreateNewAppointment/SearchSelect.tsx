import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Patient, SearchSelectProps } from "../../store/types.ts";
import { AppDispatch } from "../../../../store/index.ts";
import { fetchPatientSearch } from "../../store/actions.ts";
import { getSelectedPatientSearch, selectLoading, selectError } from "../../store/selectors.ts";

const SearchSelect: React.FC<SearchSelectProps> = ({ onSelect }) => {
    const dispatch = useDispatch<AppDispatch>();
    const patientSearch = useSelector(getSelectedPatientSearch);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const [query, setQuery] = useState<string>("");
    const [selectedPatient, setSelectedPatient] = useState<any | null>(null);

    useEffect(() => {
        const fetchPatients = () => {
            if (query.length < 3) {
                return;
            }
            dispatch(fetchPatientSearch({ query }));
        };

        const delayDebounceFn = setTimeout(() => {
            fetchPatients();
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query, dispatch]);

    const handleInputChange = (newValue: string) => {
        setQuery(newValue);
    };

    const handleSelect = (selectedOption: any) => {
        setSelectedPatient(selectedOption);
        onSelect({
            id: selectedOption.value,
            firstName: selectedOption.first_name,
            lastName: selectedOption.last_name
        });
        setQuery("");
    };

    const patientOptions = patientSearch.map((patient: Patient) => ({
        value: patient.id,
        label: `${patient.first_name} ${patient.last_name}`,
    }));

    return (
        <div className="search-select">
            <Select
                value={selectedPatient}
                inputValue={query}
                onInputChange={handleInputChange}
                options={patientOptions}
                onChange={handleSelect}
                isLoading={isLoading}
                noOptionsMessage={() => (query.length < 3 ? "Enter at least 3 characters" : "Patients not found")}
                placeholder="Search patients..."
            />
            {error && <div>{error}</div>}
        </div>
    );
};

export default SearchSelect;
