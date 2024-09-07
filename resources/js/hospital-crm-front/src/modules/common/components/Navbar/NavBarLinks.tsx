import React from 'react';
import NavLink from './NavLink.tsx';
import styles from "../Navbar/index.module.css";

const NavBarLinks: React.FC<{ navLinks: Array<{ to: string, label: string }>, viewportWidth: number, handleLinkClick: () => void }> = ({ navLinks, viewportWidth, handleLinkClick }) => (
    <div className="d-flex flex-row">
        {navLinks
            .filter(link => viewportWidth >= 1120 || link.label !== "Medical Events")
            .map((link, index) => (
                <NavLink
                    key={index}
                    to={link.to}
                    className={`${styles.nav_link} nav-link mt-3`}
                    onClick={handleLinkClick}
                >
                    {link.label}
                </NavLink>
            ))
        }
    </div>
);

export default NavBarLinks;
