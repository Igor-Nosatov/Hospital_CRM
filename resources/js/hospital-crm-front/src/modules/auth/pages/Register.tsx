import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import authBg from "../../../assets/img/wallper1.jpg";
import { selectAuthError } from '../store/selectors';
import { AppDispatch } from '../../../store';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { AuthError } from '../types';
import RegisterFormField from '../components/RegisterFormField';

const Register: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const status = useAuthStatus();
    const error = useSelector(selectAuthError) as AuthError | null;

    const {
        formData,
        formErrors,
        handleInputChange,
        handleRegister
    } = useRegisterForm({ dispatch, status });

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col-12 col-md-6 p-0">
                    <img src={authBg} alt="Doctor Banner" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-md-6 p-5 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: '600px', width: '100%' }}>
                        <h2 className="mb-4 font-weight-bold">Register</h2>
                        <h6 className="mb-4">Create your account by filling in the information below.</h6>
                        <form onSubmit={handleRegister}>
                            <RegisterFormField
                                id="name"
                                label="Enter your full name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleInputChange}
                                error={formErrors.name}
                            />
                            <RegisterFormField
                                id="email"
                                label="Enter your email address"
                                type="email"
                                placeholder="example@mail.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                error={formErrors.email}
                            />
                            <RegisterFormField
                                id="password"
                                label="Enter your Password"
                                type="password"
                                placeholder="At least 8 characters"
                                value={formData.password}
                                onChange={handleInputChange}
                                error={formErrors.password}
                            />
                            <button type="submit" className="btn btn-primary mt-3 btn-submit">Submit</button>
                        </form>
                        {status === 'failed' && error && <div className="text-danger mt-3">{error.message}</div>}
                        <div className="mt-3 text-center">
                            <span>Already have an account? </span>
                            <Link to="/auth/login" className="btn btn-link">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
