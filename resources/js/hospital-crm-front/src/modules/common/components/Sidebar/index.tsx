import React from "react";
import styles from "../Sidebar/index.module.css";
import door from "../../../../assets/img/door.png";
import medical_doc from "../../../../assets/img/medical-record1.png";
import gear from "../../../../assets/img/gear.png";
import analytic from "../../../../assets/img/analyzing.png";
import salary_report from "../../../../assets/img/payroll.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../auth/store/authSlice'; // Adjust the import path as necessary

const Sidebar: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.removeItem('medical-crm-token');
        dispatch(logout());
        console.log('Logout from Hospital CRM');
        navigate("/auth/login");
    };

    return (
        <aside className="ps-4">
            <div className={`${styles.sidebar}`}>
                <div className={`${styles.topMenu} d-flex flex-column pt-1 pb-5`}>
                    <Link to="/patient-documents" className={`${styles.link_style}`}>
                      <img src={medical_doc} alt="medical doc" className={`${styles.link_icon}`} />
                    </Link>
                </div>
                <div className={`${styles.middleMenu} d-flex flex-column ps-1 pt-5`}>
                    <Link to="/analytics" className={`${styles.link_style} pt-2`}>
                    <img src={analytic} alt="analytic" className={`${styles.link_icon}`} />
                    </Link>
                    <Link to="/salary-report" className={`${styles.link_style} pt-3`}>
                    <img src={salary_report} alt="salary report" className={`${styles.link_icon}`} />
                    </Link>
                    <Link to="/settings" className={`${styles.link_style} pt-3`}>
                    <img src={gear} alt="settings" className={`${styles.link_icon}`} />
                    </Link>
                </div>
                <div className={`${styles.bottomMenu} d-flex flex-column pt-3`}>
                    <form onSubmit={handleLogout}>
                        <button type="submit" className={`${styles.btn_logout}`}>
                            <img src={door} alt="Logo" className={styles.logout} />
                        </button>
                    </form>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
