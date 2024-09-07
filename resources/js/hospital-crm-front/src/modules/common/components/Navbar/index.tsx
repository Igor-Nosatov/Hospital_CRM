import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavbarModals } from '../../hooks/useNavbarModals';
import { useViewportWidth } from '../../hooks/useViewportWidth';
import NavBarLogo from './NavBarLogo';
import NavBarLinks from './NavBarLinks';
import NavBarMobileMenu from './NavBarMobileMenu';
import NavBarUserActions from './NavBarUserActions';
import SearchModal from './SearchModal.tsx';
import HelpChatModal from './HelpChatModal.tsx';
import NotificationModal from './NotificationModal.tsx';
import styles from "../Navbar/index.module.css";
import { navLinks } from '../../constants/navLinks';

const Navbar: React.FC = () => {
    const viewportWidth = useViewportWidth();
    const {
        showSearchModal,
        showHelpChatModal,
        showNotificationModal,
        handleCloseSearchModal,
        handleShowSearchModal,
        handleCloseHelpChatModal,
        handleShowHelpChatModal,
        handleCloseNotificationModal,
        handleShowNotificationModal
    } = useNavbarModals();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const handleLinkClick = () => setIsMobileMenuOpen(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('medical-crm-token');
        console.log('Logout from Hospital CRM');
        navigate("/auth/login");
    };

    const doctorId = localStorage.getItem('doctorId');
    const profileUrl = `/doctor-profile/${doctorId}`;

    return (
        <nav className={`${styles.nav_style}`}>
            <div className="row g-0  min_width_block">
                <div className="col-12 d-none d-lg-block col-lg-8 col-xl-8 col-xxl-8">
                    <div className="navbar-nav d-flex flex-row">
                        <NavBarLogo handleLinkClick={handleLinkClick} />
                        <NavBarLinks navLinks={navLinks} viewportWidth={viewportWidth} handleLinkClick={handleLinkClick} />
                    </div>
                </div>
                <NavBarMobileMenu
                    isMobileMenuOpen={isMobileMenuOpen}
                    toggleMobileMenu={toggleMobileMenu}
                    navLinks={navLinks}
                    handleLogout={handleLogout}
                    handleLinkClick={handleLinkClick}
                    viewportWidth={viewportWidth}
                />
                <div className="col-4 col-sm-9 col-md-9 col-lg-4 col-xl-4 col-xxl-4">
                    <div className="d-flex flex-row justify-content-end">
                    <NavBarUserActions
                        handleShowSearchModal={handleShowSearchModal}
                        handleShowHelpChatModal={handleShowHelpChatModal}
                        handleShowNotificationModal={handleShowNotificationModal}
                        profileUrl={profileUrl}
                    />
                    </div>
                </div>
            </div>
            <SearchModal show={showSearchModal} handleClose={handleCloseSearchModal} />
            <HelpChatModal show={showHelpChatModal} handleClose={handleCloseHelpChatModal} />
            <NotificationModal show={showNotificationModal} handleClose={handleCloseNotificationModal} />
        </nav>
    );
};

export default Navbar;
