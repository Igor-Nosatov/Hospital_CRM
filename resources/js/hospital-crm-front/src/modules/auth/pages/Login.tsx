import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import authBg from "../../../assets/img/wallper1.jpg";
import { selectAuthError, selectAuthStatus } from '../store/selectors';
import { AppDispatch } from '../../../store';
import LoginFormField from '../components/LoginFormField';
import { useLoginForm } from '../hooks/useLoginForm';
import { AuthError } from '../types';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError) as AuthError | null;

    const {
        email,
        setEmail,
        password,
        setPassword,
        formErrors,
        handleLogIn
    } = useLoginForm(dispatch, navigate);

    React.useEffect(() => {
        console.log('Current status:', status);
        if (status === 'succeeded') {
            navigate("/");
        }
    }, [status, navigate]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await handleLogIn(event);
        // Ensure that status change does not cause infinite re-render
    };

    return (
        <div className="container-fluid">
            <div className="row min-vh-100">
                <div className="col-12 col-md-6 p-0">
                    <img src={authBg} alt="Authentication Background" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-12 col-md-6 p-5 d-flex align-items-center justify-content-center">
                    <div style={{ maxWidth: '600px', width: '100%' }}>
                        <h2 className="mb-4 font-weight-bold">Log In</h2>
                        <h6 className="mb-4">Log in with your credentials.</h6>
                        <form onSubmit={handleSubmit}>
                            <LoginFormField
                                id="AuthEmail"
                                type="email"
                                placeholder="example@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Enter your email address"
                                ariaDescribedBy="emailHelp"
                                error={formErrors.email}
                            />
                            <LoginFormField
                                id="AuthPassword"
                                type="password"
                                placeholder="At least 8 characters"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                label="Enter your Password"
                                ariaDescribedBy="passwordHelp"
                                error={formErrors.password}
                            />
                            <button type="submit" className="btn btn-primary mt-3 btn-submit">Submit</button>
                        </form>
                        {status === 'failed' && error && <div className="text-danger mt-3">{error.message}</div>}
                        <div className="mt-3 text-center">
                            <span>Don't have an account? </span>
                            <Link to="/auth/register" className="btn btn-link">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
