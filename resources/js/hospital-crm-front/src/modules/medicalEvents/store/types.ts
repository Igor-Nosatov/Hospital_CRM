export type  MedicalEventData  = {
    title: string;
    event_id: number;
    lector_photo: string;
    medical_event_type: string;
    lecturer: string;
    event_organizer: string;
    event_date: string;
    language: string;
}

export type  Meta =  {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
}

export type EventAgenda = {
    id: number;
    title: string;
    time: string;
    session: string;
    description: string;
};


export type AgendaProps = {
    medicalEventAgenda: EventAgenda[];
}

export type  CardEventProps = {
    medicalEvent: MedicalEventData;
}

export type   PaginationProps = {
    medicalEventsMetaData: {
        current_page: number;
        last_page: number;
    };
    onPageChange: (page: number) => void;
}
