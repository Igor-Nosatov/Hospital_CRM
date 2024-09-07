import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectAuthStatus } from '../store/selectors';

export const useAuthStatus = () => {
    const navigate = useNavigate();
    const status = useSelector(selectAuthStatus);

    useEffect(() => {
        if (status === 'succeeded') {
            navigate("/");
        }
    }, [status, navigate]);

    return status;
};
