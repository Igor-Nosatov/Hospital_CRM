import { months } from "../constants/monthName";

export function monthNameToNumber(monthName) {
    return months.indexOf(monthName) + 1;
}
