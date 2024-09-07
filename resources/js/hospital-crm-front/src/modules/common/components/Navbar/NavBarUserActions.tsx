import React from 'react';
import { Link } from 'react-router-dom';
import avatar from "../../../../assets/img/avatar.png";
import search from "../../../../assets/img/magnifying-glass.png";
import helpChat from "../../../../assets/img/helpdesk.png";
import notification from "../../../../assets/img/bell.png";
import styles from "../Navbar/index.module.css";

const NavBarUserActions: React.FC<{ handleShowSearchModal: () => void, handleShowHelpChatModal: () => void, handleShowNotificationModal: () => void, profileUrl: string }> = ({ handleShowSearchModal, handleShowHelpChatModal, handleShowNotificationModal, profileUrl }) => (
    <div className={`${styles.user_actions_menu} d-flex flex-row justify-content-end pt-3`}>
        <div className={`mt-1`} onClick={handleShowSearchModal}>
            <img src={search} alt="search patient" className={`${styles.nav_icon}`} />
        </div>
        <div className={`mt-1`} onClick={handleShowHelpChatModal}>
            <img src={helpChat} alt="help chat" className={`${styles.nav_icon}`} />
        </div>
        <div className={`mt-1`} onClick={handleShowNotificationModal}>
            <img src={notification} alt="notification" className={`${styles.nav_icon}`} />
        </div>
        <Link to={profileUrl} className={styles.avatar_link}>
            <img src={avatar} alt="Avatar" className={styles.avatar_img} />
        </Link>
    </div>
);

export default NavBarUserActions;
