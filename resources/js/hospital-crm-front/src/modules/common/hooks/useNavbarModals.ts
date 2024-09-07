import { useState } from 'react';

export const useNavbarModals = () => {
    const [showSearchModal, setShowSearchModal] = useState(false);
    const [showHelpChatModal, setShowHelpChatModal] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false);

    const handleCloseSearchModal = () => setShowSearchModal(false);
    const handleShowSearchModal = () => setShowSearchModal(true);

    const handleCloseHelpChatModal = () => setShowHelpChatModal(false);
    const handleShowHelpChatModal = () => setShowHelpChatModal(true);

    const handleCloseNotificationModal = () => setShowNotificationModal(false);
    const handleShowNotificationModal = () => setShowNotificationModal(true);

    return {
        showSearchModal,
        showHelpChatModal,
        showNotificationModal,
        handleCloseSearchModal,
        handleShowSearchModal,
        handleCloseHelpChatModal,
        handleShowHelpChatModal,
        handleCloseNotificationModal,
        handleShowNotificationModal
    };
};
