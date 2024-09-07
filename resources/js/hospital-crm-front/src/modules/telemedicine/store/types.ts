export type  MeetingCount  = {
    total_meetings_for_month: number;
    cancelled_meetings: number;
    active_meetings: number;
    completed_meetings: number;
}

export type MeetingStatus = "Active" | "Urgently" | "Cancelled" | "Overdue" | "Completed";

export type  MeetingItem = {
    id: number;
    meeting_status: string;
    meeting_date: string;
    description: string;
    patient_id: number;
    patient_full_name: string;
    patient_date_of_birth: string;
    address: string;
    phone_number: string;
    email: string;
}

export type  TelemedicinePayload= {
    meeting_count: MeetingCount;
    meeting_filter: MeetingStatus[];
    meeting_list: MeetingItem[];
}

export type  FilterBarProps = {
    meetingFilter: MeetingStatus[]; 
    selectedStatus: string | null;
    onStatusSelect: (status: string | null) => void;
}

export type  MeetingCardProps = {
    meeting: MeetingItem; 
}

export type  TitleBarProps = {
    meetingCount: MeetingCount; 
}