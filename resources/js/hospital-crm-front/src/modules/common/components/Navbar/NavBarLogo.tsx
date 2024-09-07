import React from 'react';
import { Link } from 'react-router-dom';
import healthcare from "../../../../assets/img/healthcare.png";
import styles from "../Navbar/index.module.css";

const NavBarLogo: React.FC<{ handleLinkClick: () => void }> = ({ handleLinkClick }) => (
    <Link to="/" className={`${styles.nav_link} nav-link`} onClick={handleLinkClick}>
        <img src={healthcare} alt="Healthcare" className={`${styles.logo}`} />
    </Link>
);

export default NavBarLogo;
