import React, { useState } from "react";
import TitleBar from "../components/TitleBar.tsx";
import FilterBar from "../components/FilterBar.tsx";
import MeetingCard from "../components/MeetingCard.tsx";
import { AppDispatch } from "../../../store/index.ts";
import { useDispatch, useSelector } from "react-redux";
import { fetchTelemedicinePaginationData } from "../store/actions.ts";
import {
    selectError,
    selectLoading,
    selectMeetingCount,
    selectMeetingFilter,
    selectMeetingList,
} from "../store/selectors.ts";

const Telemedicine: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const meetingList = useSelector(selectMeetingList);
    const meetingCount = useSelector(selectMeetingCount);
    const meetingFilter = useSelector(selectMeetingFilter);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

    React.useEffect(() => {
        dispatch(fetchTelemedicinePaginationData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredMeetingList = selectedStatus
        ? meetingList.filter(
            (meeting) => meeting.meeting_status === selectedStatus
        )
        : meetingList;

    return (
        <div className="col-12">
            <div className="row g-0">
                <div className="col-12 patient_filters pe-5">
                    <div className="row g-0">
                        <div className="col-12">
                            <TitleBar meetingCount={meetingCount} />
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-1 pb-2">
                    <FilterBar
                        meetingFilter={meetingFilter}
                        selectedStatus={selectedStatus}
                        onStatusSelect={setSelectedStatus}
                    />
                </div>
                <div className="col-12 pb-5">
                    <div className="row g-0 ps-4">
                        {filteredMeetingList.map((meeting) => (
                            <div key={meeting.id} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 pe-4 pb-3">
                                <MeetingCard meeting={meeting} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Telemedicine;
