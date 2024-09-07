import React from 'react';
import { formatLabel } from '../../utils/formatLabel';

interface InputFieldProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const EditPatientInputField: React.FC<InputFieldProps> = ({ id, value, onChange, type = 'text' }) => (
    <div className="col-6">
        <label htmlFor={id} className="form-label">{formatLabel(id)}</label>
        <input type={type} className="form-control" id={id} value={value} onChange={onChange} />
    </div>
);

export default EditPatientInputField;
