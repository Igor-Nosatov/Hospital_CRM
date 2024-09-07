export type HelpChatModalProps = {
    show: boolean;
    handleClose: () => void;
}

export type  HelpDeskFormData = {
    title: string;
    description: string;
    doctor_id: number | null;
}

export type  HelpDeskQueryData = {
    title: string;
    description: string;
    doctor_id: number;
}
