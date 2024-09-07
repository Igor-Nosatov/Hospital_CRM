import React from 'react';
import NotificationSettings from '../components/NotificationSettings.tsx';
import InsuranceSettings from '../components/InsuranceSettings.tsx';
import BillingSettings from '../components/BillingSettings.tsx';
import ProfileSettings from '../components/ProfileSettings.tsx';
import { AppDispatch } from '../../../store/index.ts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettingsData } from '../store/actions.ts';
import {
    selectNotificationOptionList,
    selectInsuranceOptionList,
    selectBillingOptionList,
    selectProfileOptionList,
    selectError,
    selectLoading,
} from "../store/selectors.ts";
import stylesSt from '../style/index.module.css';

const Settings = () => {
    const dispatch = useDispatch<AppDispatch>();

    const notificationOptionList = useSelector(selectNotificationOptionList);
    const insuranceOptionList = useSelector(selectInsuranceOptionList);
    const billingOptionList = useSelector(selectBillingOptionList);
    const profileOptionList = useSelector(selectProfileOptionList);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    React.useEffect(() => {
        dispatch(fetchSettingsData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className='row g-0 ps-2 pe-2'>
                <div className="col-12">
                    <h3 className="pt-3 ps-1 ps-1">Settings</h3>
                </div>
                <div className="col-12 pt-3">
                    <ul className="nav nav-pills ps-1 mb-3 min_block_width" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`${stylesSt.nav_pills_active} nav-link active`}
                                id="pills-notification-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-notification"
                                type="button"
                                role="tab"
                                aria-controls="pills-notification"
                                aria-selected="true">
                                Notification
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link disabled"
                                id="pills-insurance-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-insurance"
                                type="button"
                                role="tab"
                                aria-controls="pills-insurance"
                                aria-selected="false">
                                Insurance
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link disabled"
                                id="pills-billing-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-billing"
                                type="button"
                                role="tab"
                                aria-controls="pills-billing"
                                aria-selected="false">
                                Billing
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link disabled"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false">
                                Profile
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content min_block_width ps-1 pe-4" id="pills-tabContent">
                        <div className="tab-pane fade show active pe-4" id="pills-notification" role="tabpanel" aria-labelledby="pills-notification-tab">
                            <NotificationSettings notificationOptionList={notificationOptionList} />
                        </div>
                        {/* <div className="tab-pane fade" id="pills-insurance" role="tabpanel" aria-labelledby="pills-insurance-tab">
                                <InsuranceSettings insuranceOptionList={insuranceOptionList}/>
                            </div>
                            <div className="tab-pane fade" id="pills-billing" role="tabpanel" aria-labelledby="pills-billing-tab">
                                <BillingSettings billingOptionList={billingOptionList}/>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <ProfileSettings profileOptionList={profileOptionList}/>
                            </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
