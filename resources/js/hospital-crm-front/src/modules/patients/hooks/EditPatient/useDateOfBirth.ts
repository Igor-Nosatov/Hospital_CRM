import { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';

const useDateOfBirth = (initialDate: string) => {
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date(initialDate));

    useEffect(() => {
        setDateOfBirth(new Date(initialDate));
    }, [initialDate]);

    const formattedDateOfBirth = format(dateOfBirth, 'yyyy-MM-dd');

    const handleDateChange = (value: string) => {
        const parsedDate = parse(value, 'yyyy-MM-dd', new Date());
        setDateOfBirth(parsedDate);
    };

    return { formattedDateOfBirth, handleDateChange };
};

export default useDateOfBirth;
