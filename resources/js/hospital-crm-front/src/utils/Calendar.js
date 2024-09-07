export function getDatesWithWeekdays(year, month) {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const weekdayName = weekdays[date.getDay()];
        dates.push(`${day} ${weekdayName}`);
    }

    return dates;
}

