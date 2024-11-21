// Define an interface 'Festival' that represents the structure of a festival object
// This interface ensures that every festival object will have two properties:
// 1. 'name' - a string that stores the name of the festival.
// 2. 'date' - a string that represents the date of the festival (in DD-MM format).
export interface Festival {
    name: string;  // The name of the festival, e.g., "Harela".
    date: string;  // The date of the festival in DD-MM format, e.g., "16-07".
}

// Define a constant 'festivals', which is an array of objects, each object conforming
// to the 'Festival' interface. This array contains details about several Uttarakhand festivals.
export const festivals: Festival[] = [
    {name: "Harela", date: "16-07"},
    {name: "Phool Dei", date: "14-03"},
    {name: "Nanda Devi Raj Jat", date: "05-09"},
    {name: "Bikhauti", date: "14-04"},
    {name: "Kauthig", date: "22-02"},
    {name: "Ghee Sankranti", date: "17-02"},
    {name: "Egaas Bhagwal", date: "12-03"}
];

// Define a function 'getUpcomingFestival' which returns the festival happening today or the next upcoming festival,
// and if all festivals for the current year have passed, it returns the first festival of the next year.
export const getUpcomingFestival = (): Festival => {

    // Get the current date.
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed in JS, so add 1.

    // Function to compare festival date with current date, accounting for annual recurrence.
    const compareDate = (festivalDate: string): number => {
        const [day, month] = festivalDate.split('-').map(Number);

        // Create date objects with the current year.
        const festivalThisYear = new Date(currentDate.getFullYear(), month - 1, day);
        const today = new Date(currentDate.getFullYear(), currentMonth - 1, currentDay);

        // Calculate the difference in time (in milliseconds).
        return festivalThisYear.getTime() - today.getTime();
    };

    // Filter the 'festivals' array to only keep future festivals or today's festival.
    const upcomingFestivals = festivals
        .filter(festival => compareDate(festival.date) >= 0)
        .sort((a, b) => compareDate(a.date) - compareDate(b.date));

    // If there are upcoming festivals for the current year, return the first one.
    if (upcomingFestivals.length > 0) {
        return upcomingFestivals[0];
    }

    // If no festivals are left for this year, return the first festival of the next year.
    // Assume the festivals repeat annually.
    return festivals.sort((a, b) => compareDate(a.date) - compareDate(b.date))[0];
};


