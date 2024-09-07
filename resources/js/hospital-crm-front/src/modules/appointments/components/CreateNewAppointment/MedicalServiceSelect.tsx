import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMedicalService } from '../../store/actions.ts';
import { getMedicalService } from '../../store/selectors.ts';
import { AppDispatch } from '../../../../store/index.ts';
import { MedicalService, MedicalServiceSelectProps } from "../../store/types.ts";

const MedicalServiceSelect: React.FC<MedicalServiceSelectProps> = ({ medicalServiceId, onSelect }) => {
    const dispatch = useDispatch<AppDispatch>();
    const medicalServices: MedicalService[] = useSelector(getMedicalService); 

    useEffect(() => {
        dispatch(fetchMedicalService());
    }, [dispatch]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(parseInt(e.target.value));
    };

    return (
        <div className="mb-3">
            <label htmlFor="medical_service_id" className="form-label">Medical Service</label>
            <select
                className="form-select"
                id="medical_service_id"
                name="medical_service_id"
                value={medicalServiceId ?? ""}
                onChange={handleSelectChange}
                required
            >
                <option value="" disabled>Select a medical service</option>
                {medicalServices.map(service => (
                    <option key={service.id} value={service.id}>{service.name}</option>
                ))}
            </select>
        </div>
    );
};

export default MedicalServiceSelect;
