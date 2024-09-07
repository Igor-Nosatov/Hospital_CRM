import React from "react";
import { Link } from "react-router-dom";
import styles from "../index.module.css";

interface NavLinkProps {
    to: string;
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, className, onClick, children }) => (
    <Link to={to} className={className} onClick={onClick}>
        {children}
    </Link>
);

export default NavLink;
