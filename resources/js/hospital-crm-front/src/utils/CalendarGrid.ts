const createCalendarGrid = (calendarData: { [key: string]: any[] }) => {
    if (Object.keys(calendarData).length === 0) return [];

    const firstDateStr = Object.keys(calendarData)[0];
    const firstDate = new Date(firstDateStr);
    const startDay = getAdjustedDay(firstDate);
    const totalDays = Object.keys(calendarData).length;

    const grid: (number | null)[][] = [];
    let currentWeek: (number | null)[] = new Array(7).fill(null);

    let dayCounter = 1;
    for (let i = startDay; i < 7 && dayCounter <= totalDays; i++) {
        currentWeek[i] = dayCounter++;
    }
    grid.push(currentWeek);

    while (dayCounter <= totalDays) {
        currentWeek = new Array(7).fill(null);
        for (let i = 0; i < 7 && dayCounter <= totalDays; i++) {
            currentWeek[i] = dayCounter++;
        }
        grid.push(currentWeek);
    }

    return grid;
};

const getAdjustedDay = (dateObj: Date) => {
    const day = dateObj.getDay();
    return day === 0 ? 6 : day - 1;
};

export { createCalendarGrid };
