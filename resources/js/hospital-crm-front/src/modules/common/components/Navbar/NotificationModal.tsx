import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectNotificationData,
    selectNotificationMeta,
    selectLoading,
    selectError,
} from "../../store/selectors";
import { fetchNotifications } from "../../store/actions";

interface NotificationModalProps {
    show: boolean;
    handleClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const notifications = useSelector(selectNotificationData);
    const meta = useSelector(selectNotificationMeta);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if (show) {
            dispatch(fetchNotifications(currentPage));
        }
    }, [show, currentPage, dispatch]);

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
        dispatch(fetchNotifications(page));
    };

    const renderPageButtons = () => {
        const pages = [];
        const totalPages = meta?.last_page || 1;

        let startPage = 1;
        let endPage = totalPages;
        if (totalPages > 5) {
            startPage = Math.max(1, currentPage - 2);
            endPage = Math.min(totalPages, currentPage + 2);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageClick(i)}>{i}</button>
                </li>
            );
        }

        return pages;
    };

    return (
        <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex={-1} role="dialog" style={{ maxHeight: '800px' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Notifications</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <>
                                <ul className="list-group">
                                    {notifications.map((notification, index) => (
                                        <li key={index} className="list-group-item">
                                            <strong>{notification.title}</strong>: {notification.message}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                    <div className="modal-footer">
                        <nav aria-label="Page navigation pt-3 mt-4">
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${meta?.prev_page_url ? '' : 'disabled'}`}>
                                    <button className="page-link" onClick={() => handlePageClick(currentPage - 1)}>Previous</button>
                                </li>
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageClick(1)}>First</button>
                                </li>
                                {renderPageButtons()}
                                <li className={`page-item ${meta?.next_page_url ? '' : 'disabled'}`}>
                                    <button className="page-link" onClick={() => handlePageClick(currentPage + 1)}>Next</button>
                                </li>
                                <li className={`page-item ${currentPage === meta?.last_page ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageClick(meta?.last_page || 1)}>Last</button>
                                </li>
                            </ul>
                        </nav>
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationModal;
