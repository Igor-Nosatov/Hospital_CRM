import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createHelpDeskQuery } from "../../store";
import { HelpChatModalProps, HelpDeskFormData } from "../../store/types";
import { HelpDeskSchema } from "../../validation/HelpDeskSchema";

const HelpChatModal: React.FC<HelpChatModalProps> = ({ show, handleClose }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [formData, setFormData] = useState<HelpDeskFormData>({
        title: '',
        description: '',
        doctor_id: null,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const doctorId = localStorage.getItem('doctorId');
        if (doctorId) {
            setFormData(prevState => ({
                ...prevState,
                doctor_id: parseInt(doctorId, 10),
            }));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: name === 'doctor_id' ? parseInt(value, 10) : value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = HelpDeskSchema.safeParse(formData);

        if (!result.success) {
            const newErrors: { [key: string]: string } = {};
            result.error.errors.forEach((error) => {
                if (error.path.length > 0) {
                    newErrors[error.path[0]] = error.message;
                }
            });
            setErrors(newErrors);
            return;
        }

        try {
            await dispatch(createHelpDeskQuery(formData)).unwrap();
            handleClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex={-1} role="dialog" aria-labelledby="helpChatModalTitle" aria-hidden={!show}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 id="helpChatModalTitle" className="modal-title">Help Desk Form</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    aria-describedby="titleHelp"
                                />
                                {errors.title && <div id="titleHelp" className="invalid-feedback">{errors.title}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    aria-describedby="descriptionHelp"
                                />
                                {errors.description && <div id="descriptionHelp" className="invalid-feedback">{errors.description}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary btn-save">Save</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpChatModal;
