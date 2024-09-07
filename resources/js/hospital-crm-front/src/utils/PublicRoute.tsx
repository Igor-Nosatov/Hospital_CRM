import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/" /> : <>{children}</>;
};

export default PublicRoute;
