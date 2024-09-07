import { format } from 'date-fns';

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formattedDate = format(date, 'dd MMMM yyyy');
    const time = format(date, 'HH:mm');
    const [hours, minutes] = time.split(':');
    const formattedTime = `${hours} hours ${minutes} minutes`;
    return `${formattedTime} ${formattedDate}`;
};
