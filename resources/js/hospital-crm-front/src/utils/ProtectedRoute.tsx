import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('medical-crm-token');
    return token ? <>{children}</> : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
