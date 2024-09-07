import React from 'react';
import stylesSt from '../style/index.module.css';
import { InsuranceSettingsProps } from '../store';

const InsuranceSettings: React.FC<InsuranceSettingsProps> = ({ insuranceOptionList }) => {
    const [buttonStates, setButtonStates] = React.useState({
        insurancePlan: false,
        authorizationRequirements: false,
        insuranceVerification: false,
        pharmacyNetworks: false,
        referralPolicies: false,
        networkCoverage: false,
        copayment: false,
        submissionPreferences: false,
        reimbursement: false,
        coverageExceptionsAndLimitations: false,
        claimDenials: false,
        complianceReporting: false,
    });

    const handleToggle = (buttonName: keyof typeof buttonStates) => {
        setButtonStates(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
    };

    const settingsList = [
        { key: 'insurancePlan', title: 'Insurance Plan Coverage', description: 'Ability to input and store details of various insurance plans accepted by the doctor\'s practice, including coverage limitations and copayment requirements.' },
        { key: 'authorizationRequirements', title: 'Authorization Requirements', description: 'Option to specify insurance authorization requirements for specific procedures or treatments, ensuring compliance with insurance policies.' },
        { key: 'insuranceVerification', title: 'Patient Insurance Verification', description: 'Feature to verify patient insurance eligibility and coverage status in real-time or through batch processing, reducing claim denials and billing errors.' },
        { key: 'pharmacyNetworks', title: 'Preferred Pharmacy Networks', description: 'Setting to indicate preferred pharmacy networks associated with different insurance plans accepted by the practice, facilitating prescription processing and coordination of care.' },
        { key: 'referralPolicies', title: 'Referral Policies', description: 'Configuration for insurance-based referral policies, including requirements for obtaining specialist referrals and obtaining prior authorizations for referrals.' },
        { key: 'networkCoverage', title: 'Out-of-Network Coverage', description: 'Option to define terms and conditions for out-of-network coverage, including patient responsibilities for payment and reimbursement processes.' },
        { key: 'copayment', title: 'Co-payment and Deductible Management', description: 'Tools to manage co-payment and deductible amounts associated with each insurance plan, with automatic calculation and tracking features.' },
        { key: 'submissionPreferences', title: 'Claims Submission Preferences', description: 'Settings to specify preferred methods and formats for claims submission to different insurance carriers, such as electronic claims submission or paper-based submission.' },
        { key: 'reimbursement', title: 'Reimbursement Rates', description: 'Capability to input and update reimbursement rates negotiated with insurance companies for various medical services provided by the doctor\'s practice.' },
        { key: 'coverageExceptionsAndLimitations', title: 'Coverage Exceptions and Limitations', description: 'Feature to document coverage exceptions, limitations, and exclusions for specific insurance plans, ensuring accurate billing and patient communication.' },
        { key: 'claimDenials', title: 'Appeals and Denials Management', description: 'Functionality to track and manage insurance claim denials, including options for filing appeals and documenting resolution outcomes.' },
        { key: 'complianceReporting', title: 'Compliance Reporting', description: 'Tools to generate reports on insurance-related metrics, such as claim acceptance rates, reimbursement timelines, and compliance with insurance contract terms.' },
    ];

    return (
        <div className={`${stylesSt.settings_container}`}>
            <div className="row g-0">
                {settingsList.map(setting => (
                    <div className="col-6 ps-4" key={setting.key}>
                        <div className="row g-0">
                            <div className="col-6">
                                <h4>{setting.title}</h4>
                                <p>{setting.description}</p>
                            </div>
                            <div className="col-6">
                                <label className={`${stylesSt.toggle}`}>
                                    <input
                                        type="checkbox"
                                        checked={buttonStates[setting.key as keyof typeof buttonStates]}
                                        onChange={() => handleToggle(setting.key as keyof typeof buttonStates)}
                                    />
                                    <span className={`${stylesSt.slider}`}></span>
                                </label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InsuranceSettings;
