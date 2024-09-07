import { useState } from 'react';
import { PatientRequest } from '../../validation/patientRequest';

const useEditPatient = (initialState: PatientRequest) => {
    const [formData, setFormData] = useState<PatientRequest>(initialState);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    };

    return { formData, handleInputChange };
};

export default useEditPatient;
