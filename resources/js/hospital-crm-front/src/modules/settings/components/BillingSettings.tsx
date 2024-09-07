import React, { useState } from 'react';
import stylesSt from '../style/index.module.css';
import { BillingSettingsProps } from '../store';

const BillingSettings: React.FC<BillingSettingsProps> = ({ billingOptionList }) => {
    const [buttonStates, setButtonStates] = useState({
        claimSubmission: false,
        remittanceAdvice: false,
        denialManagement: false,
        billingCode: false,
        claimStatusTracking: false,
        paymentPosting: false,
        insuranceFee: false,
        superbills: false,
        financialAnalytics: false,
        integratedPayment: false,
        contractualAdjustment: false,
        billingAudit: false,
    });

    const handleToggle = (buttonName: keyof typeof buttonStates) => {
        setButtonStates(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
    };

    return (
        <div className={`${stylesSt.settings_container}`}>
            <div className="row g-0">
                <div className="col-6 ps-4">
                    <div className="row g-0">
                        <div className="col-6">
                            <h4>Claim Submission Automation: </h4>
                            <p>Capability to automate the submission of insurance claims to reduce manual effort and minimize errors.</p>
                        </div>
                        <div className="col-6">
                            <label className={`${stylesSt.toggle}`}>
                                <input type="checkbox" checked={buttonStates.claimSubmission} onChange={() => handleToggle('claimSubmission')} />
                                <span className={`${stylesSt.slider}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingSettings;
