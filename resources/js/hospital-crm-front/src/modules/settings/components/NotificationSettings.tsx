import React, { useState, useEffect } from 'react';
import stylesSt from '../style/index.module.css';
import { useAppDispatch } from '../../../store';
import { NotificationSettingsProps, updateSettingStatus } from '../store';

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ notificationOptionList }) => {
    const [checkedItems, setCheckedItems] = useState<{ [key: string]: string }>({});
    const dispatch = useAppDispatch();

    useEffect(() => {
        const initialCheckedItems: { [key: string]: string } = {};
        notificationOptionList.forEach(notification => {
            initialCheckedItems[notification.id] = notification.setting_status === 'Enabled' ? 'Enabled' : 'Disabled';
        });
        setCheckedItems(initialCheckedItems);
    }, [notificationOptionList]);

    const handleChange = async (id: string) => {
        try {
            const newSettingStatus = checkedItems[id] === 'Enabled' ? 'Disabled' : 'Enabled';
            await dispatch(updateSettingStatus({ id, newStatus: newSettingStatus }));
            const newCheckedItems = { ...checkedItems, [id]: newSettingStatus };
            setCheckedItems(newCheckedItems);
        } catch (error) {
            console.error('Error updating setting status:', error);
        }
    };

    return (
        <div className={`${stylesSt.settings_container}`}>
            <div className="row g-0">
                {notificationOptionList.map((notification) => (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 ps-2" key={notification.id}>
                        <div className="row g-0">
                            <div className="col-6">
                                <h4>{notification.setting_name}:</h4>
                                <p>{notification.setting_desc}.</p>
                            </div>
                            <div className="col-6">
                                <label className={`${stylesSt.toggle}`}>
                                    <input
                                        type="checkbox"
                                        checked={checkedItems[notification.id] === 'Enabled'}
                                        onChange={() => handleChange(notification.id)}
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
};

export default NotificationSettings;
