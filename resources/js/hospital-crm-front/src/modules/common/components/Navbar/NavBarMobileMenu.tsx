import React from 'react';
import MobileMenuButton from './MobileMenuButton.tsx';
import NavLink from './NavLink.tsx';
import styles from "../Navbar/index.module.css";

const NavBarMobileMenu: React.FC<{
    isMobileMenuOpen: boolean,
    toggleMobileMenu: () => void,
    navLinks: Array<{ to: string, label: string }>,
    handleLogout: () => void,
    handleLinkClick: () => void,
    viewportWidth: number
}> = ({
    isMobileMenuOpen,
    toggleMobileMenu,
    navLinks,
    handleLogout,
    handleLinkClick,
    viewportWidth
}) => (
    <div className="col-8 col-sm-3 col-md-3 d-lg-none">
        <MobileMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
        />
        <div className={`${isMobileMenuOpen ? 'd-block' : 'd-none'} ${styles.mobileMenu}`}>
            {navLinks
                .filter(link => viewportWidth >= 1500 || link.label !== "Appointments")
                .map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.to}
                        className={`${styles.nav_link} nav-link mt-1`}
                        onClick={() => {
                            handleLinkClick();
                            toggleMobileMenu();
                        }}
                    >
                        {link.label}
                    </NavLink>
                ))}
            <div
                className={`${styles.nav_link} nav-link mt-1`}
                onClick={handleLogout}
            >
                Logout
            </div>
        </div>
    </div>
);

export default NavBarMobileMenu;
